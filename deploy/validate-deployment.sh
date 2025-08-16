#!/bin/bash

set -e

PROJECT_NAME="pokemon-battle-arena"
AWS_REGION="us-east-1"

echo "🔍 Validating deployment integrity..."

check_service_health() {
    local service_url=$1
    local service_name=$2
    local max_attempts=30
    local attempt=1
    
    echo "⏳ Checking $service_name health at $service_url"
    
    while [ $attempt -le $max_attempts ]; do
        if curl -f -s "$service_url" > /dev/null; then
            echo "✅ $service_name is healthy"
            return 0
        fi
        
        echo "   Attempt $attempt/$max_attempts failed, retrying in 10s..."
        sleep 10
        ((attempt++))
    done
    
    echo "❌ $service_name failed health check after $max_attempts attempts"
    return 1
}

validate_docker_compose() {
    echo "📦 Validating Docker Compose deployment..."
    
    if ! docker-compose ps | grep -q "Up"; then
        echo "❌ Docker Compose services are not running"
        return 1
    fi
    
    check_service_health "http://localhost:8000/health" "FastAPI"
    check_service_health "http://localhost:80" "Nginx"
    check_service_health "http://localhost:3001" "Grafana"
    check_service_health "http://localhost:9090" "Prometheus"
    
    if docker-compose exec -T postgres pg_isready -U pokemon_user -d pokemon_battle; then
        echo "✅ PostgreSQL is accessible"
    else
        echo "❌ PostgreSQL connection failed"
        return 1
    fi
    
    if docker-compose exec -T redis redis-cli ping | grep -q "PONG"; then
        echo "✅ Redis is accessible"
    else
        echo "❌ Redis connection failed"
        return 1
    fi
    
    echo "✅ Docker Compose deployment validation passed"
}

validate_aws_deployment() {
    echo "☁️ Validating AWS ECS deployment..."
    
    local service_status=$(aws ecs describe-services \
        --cluster ${PROJECT_NAME}-cluster \
        --services ${PROJECT_NAME}-service \
        --query 'services[0].status' \
        --output text \
        --region ${AWS_REGION})
    
    if [ "$service_status" != "ACTIVE" ]; then
        echo "❌ ECS service is not active. Status: $service_status"
        return 1
    fi
    
    local running_count=$(aws ecs describe-services \
        --cluster ${PROJECT_NAME}-cluster \
        --services ${PROJECT_NAME}-service \
        --query 'services[0].runningCount' \
        --output text \
        --region ${AWS_REGION})
    
    if [ "$running_count" -lt "1" ]; then
        echo "❌ No running tasks found. Running count: $running_count"
        return 1
    fi
    
    local lb_dns=$(aws cloudformation describe-stacks \
        --stack-name ${PROJECT_NAME}-infrastructure \
        --query 'Stacks[0].Outputs[?OutputKey==`LoadBalancerDNS`].OutputValue' \
        --output text \
        --region ${AWS_REGION})
    
    if [ -z "$lb_dns" ]; then
        echo "❌ Could not retrieve load balancer DNS"
        return 1
    fi
    
    check_service_health "http://$lb_dns/health" "AWS Application"
    
    echo "✅ AWS ECS deployment validation passed"
    echo "🌐 Application URL: http://$lb_dns"
}

validate_heroku_deployment() {
    echo "🔮 Validating Heroku deployment..."
    
    local app_name=${HEROKU_APP_NAME:-pokemon-battle-arena}
    
    if ! heroku apps:info $app_name >/dev/null 2>&1; then
        echo "❌ Heroku app '$app_name' not found"
        return 1
    fi
    
    local app_url=$(heroku apps:info $app_name --json | jq -r '.app.web_url')
    
    if [ "$app_url" = "null" ] || [ -z "$app_url" ]; then
        echo "❌ Could not retrieve Heroku app URL"
        return 1
    fi
    
    check_service_health "${app_url}health" "Heroku Application"
    
    echo "✅ Heroku deployment validation passed"
    echo "🌐 Application URL: $app_url"
}

run_integration_tests() {
    local base_url=$1
    echo "🧪 Running integration tests against $base_url..."
    
    echo "   Testing API root endpoint..."
    if ! curl -f -s "$base_url" | jq -e '.status' >/dev/null; then
        echo "❌ API root endpoint test failed"
        return 1
    fi
    
    echo "   Testing health endpoint..."
    if ! curl -f -s "$base_url/health" | jq -e '.status == "healthy"' >/dev/null; then
        echo "❌ Health endpoint test failed"
        return 1
    fi
    
    echo "   Testing rooms list endpoint..."
    if ! curl -f -s "$base_url/api/rooms" | jq -e '.rooms' >/dev/null; then
        echo "❌ Rooms endpoint test failed"
        return 1
    fi
    
    echo "✅ Integration tests passed"
}

case "${1:-docker}" in
    "docker")
        validate_docker_compose
        run_integration_tests "http://localhost:8000"
        ;;
    "aws")
        validate_aws_deployment
        ;;
    "heroku")
        validate_heroku_deployment
        ;;
    "all")
        echo "🔄 Running comprehensive validation..."
        validate_docker_compose
        run_integration_tests "http://localhost:8000"
        
        if command -v aws &> /dev/null; then
            validate_aws_deployment
        else
            echo "⚠️  AWS CLI not found, skipping AWS validation"
        fi
        
        if command -v heroku &> /dev/null; then
            validate_heroku_deployment
        else
            echo "⚠️  Heroku CLI not found, skipping Heroku validation"
        fi
        ;;
    *)
        echo "Usage: $0 [docker|aws|heroku|all]"
        echo "  docker  - Validate Docker Compose deployment"
        echo "  aws     - Validate AWS ECS deployment"
        echo "  heroku  - Validate Heroku deployment"
        echo "  all     - Validate all available deployments"
        exit 1
        ;;
esac

echo "🎉 Deployment validation completed successfully!"