#!/bin/bash

set -e

PROJECT_NAME="pokemon-battle-arena"
AWS_REGION="us-east-1"
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
ECR_REPOSITORY_URI="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${PROJECT_NAME}"

echo "🚀 Starting deployment for ${PROJECT_NAME}"

echo "📦 Building Docker image..."
docker build -t ${PROJECT_NAME}:latest .

echo "🏷️ Tagging image for ECR..."
docker tag ${PROJECT_NAME}:latest ${ECR_REPOSITORY_URI}:latest
docker tag ${PROJECT_NAME}:latest ${ECR_REPOSITORY_URI}:$(git rev-parse --short HEAD)

echo "🔐 Logging into ECR..."
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPOSITORY_URI}

echo "⬆️ Pushing image to ECR..."
docker push ${ECR_REPOSITORY_URI}:latest
docker push ${ECR_REPOSITORY_URI}:$(git rev-parse --short HEAD)

echo "🔄 Updating ECS service..."
aws ecs update-service \
    --cluster ${PROJECT_NAME}-cluster \
    --service ${PROJECT_NAME}-service \
    --force-new-deployment \
    --region ${AWS_REGION}

echo "⏳ Waiting for deployment to complete..."
aws ecs wait services-stable \
    --cluster ${PROJECT_NAME}-cluster \
    --services ${PROJECT_NAME}-service \
    --region ${AWS_REGION}

echo "✅ Deployment completed successfully!"

LOAD_BALANCER_DNS=$(aws cloudformation describe-stacks \
    --stack-name ${PROJECT_NAME}-infrastructure \
    --query 'Stacks[0].Outputs[?OutputKey==`LoadBalancerDNS`].OutputValue' \
    --output text \
    --region ${AWS_REGION})

echo "🌐 Application is available at: http://${LOAD_BALANCER_DNS}"