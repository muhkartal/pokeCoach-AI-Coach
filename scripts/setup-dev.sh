#!/bin/bash

set -e

echo "🚀 Setting up Pokemon Battle Arena development environment..."

check_prerequisites() {
    echo "🔍 Checking prerequisites..."
    
    local missing_tools=()
    
    if ! command -v docker &> /dev/null; then
        missing_tools+=("docker")
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        missing_tools+=("docker-compose")
    fi
    
    if ! command -v node &> /dev/null; then
        missing_tools+=("node")
    fi
    
    if ! command -v python3 &> /dev/null; then
        missing_tools+=("python3")
    fi
    
    if [ ${#missing_tools[@]} -ne 0 ]; then
        echo "❌ Missing required tools: ${missing_tools[*]}"
        echo "Please install them and run this script again."
        exit 1
    fi
    
    echo "✅ All prerequisites met"
}

create_directories() {
    echo "📁 Creating project directories..."
    
    mkdir -p {data,logs,backups,ssl}
    mkdir -p data/{postgres,redis,prometheus,grafana}
    mkdir -p logs/{api,server,nginx}
    
    echo "✅ Directories created"
}

setup_environment() {
    echo "⚙️ Setting up environment configuration..."
    
    if [ ! -f .env ]; then
        if [ -f config/environment.example ]; then
            cp config/environment.example .env
            echo "📋 Created .env from example"
        else
            echo "⚠️ No environment example found, creating basic .env"
            cat > .env << EOF
NODE_ENV=development
PYTHON_ENV=development
DATABASE_URL=postgresql://pokemon_user:pokemon_password@localhost:5432/pokemon_battle
REDIS_URL=redis://localhost:6379
POSTGRES_PASSWORD=pokemon_password
REDIS_PASSWORD=
SECRET_KEY=$(openssl rand -hex 32)
JWT_SECRET=$(openssl rand -hex 32)
GRAFANA_PASSWORD=admin
EOF
        fi
        
        echo "🔐 Generated secure secrets in .env"
        echo "📝 Please review and modify .env as needed"
    else
        echo "ℹ️ .env file already exists, skipping creation"
    fi
}

install_dependencies() {
    echo "📦 Installing dependencies..."
    
    if [ -f server/package.json ]; then
        echo "   Installing Node.js dependencies..."
        cd server && npm install && cd ..
    fi
    
    if [ -f api/requirements.txt ]; then
        echo "   Installing Python dependencies..."
        if command -v python3 -m venv &> /dev/null; then
            python3 -m venv venv
            source venv/bin/activate
            pip install -r api/requirements.txt
            deactivate
        else
            pip3 install -r api/requirements.txt
        fi
    fi
    
    echo "✅ Dependencies installed"
}

verify_docker_setup() {
    echo "🐳 Verifying Docker setup..."
    
    if ! docker info &> /dev/null; then
        echo "❌ Docker is not running. Please start Docker and try again."
        exit 1
    fi
    
    echo "   Pulling required Docker images..."
    docker-compose -f docker-compose.dev.yml pull
    
    echo "✅ Docker setup verified"
}

run_development_setup() {
    echo "🏗️ Starting development environment..."
    
    docker-compose -f docker-compose.dev.yml up --build -d
    
    echo "⏳ Waiting for services to start..."
    sleep 30
    
    if docker-compose -f docker-compose.dev.yml ps | grep -q "Up"; then
        echo "✅ Development environment is running"
        echo ""
        echo "🌐 Services available at:"
        echo "   Game Client: http://localhost:8080"
        echo "   API Documentation: http://localhost:8000/docs"
        echo "   WebSocket Server: http://localhost:3000"
        echo "   Database: postgresql://pokemon_user:pokemon_password@localhost:5432/pokemon_battle"
        echo "   Redis: redis://localhost:6379"
        echo ""
        echo "📝 Useful commands:"
        echo "   View logs: docker-compose -f docker-compose.dev.yml logs -f"
        echo "   Stop services: docker-compose -f docker-compose.dev.yml down"
        echo "   Restart services: docker-compose -f docker-compose.dev.yml restart"
    else
        echo "❌ Some services failed to start. Check logs with:"
        echo "   docker-compose -f docker-compose.dev.yml logs"
        exit 1
    fi
}

run_health_checks() {
    echo "🔍 Running health checks..."
    
    local max_attempts=10
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        if curl -f -s http://localhost:8000/health >/dev/null; then
            echo "✅ API is healthy"
            break
        fi
        
        if [ $attempt -eq $max_attempts ]; then
            echo "❌ API health check failed after $max_attempts attempts"
            echo "Check logs: docker-compose -f docker-compose.dev.yml logs api"
        else
            echo "   Health check attempt $attempt/$max_attempts..."
            sleep 5
        fi
        
        ((attempt++))
    done
}

main() {
    echo "🎮 Pokemon Battle Ultimate Arena - Development Setup"
    echo "=================================================="
    
    check_prerequisites
    create_directories
    setup_environment
    install_dependencies
    verify_docker_setup
    run_development_setup
    run_health_checks
    
    echo ""
    echo "🎉 Development environment setup complete!"
    echo ""
    echo "📚 Next steps:"
    echo "   1. Open http://localhost:8080 in your browser"
    echo "   2. Check API docs at http://localhost:8000/docs"
    echo "   3. Start coding! Files are watched for changes"
    echo ""
    echo "🆘 Need help? Check the logs or README.md"
}

case "${1:-setup}" in
    "setup")
        main
        ;;
    "clean")
        echo "🧹 Cleaning up development environment..."
        docker-compose -f docker-compose.dev.yml down -v
        docker system prune -f
        echo "✅ Cleanup complete"
        ;;
    "restart")
        echo "🔄 Restarting development environment..."
        docker-compose -f docker-compose.dev.yml restart
        echo "✅ Services restarted"
        ;;
    "logs")
        docker-compose -f docker-compose.dev.yml logs -f
        ;;
    "status")
        docker-compose -f docker-compose.dev.yml ps
        ;;
    *)
        echo "Usage: $0 [setup|clean|restart|logs|status]"
        echo "  setup   - Set up development environment (default)"
        echo "  clean   - Clean up and remove all containers"
        echo "  restart - Restart all services"
        echo "  logs    - Show and follow logs"
        echo "  status  - Show service status"
        exit 1
        ;;
esac