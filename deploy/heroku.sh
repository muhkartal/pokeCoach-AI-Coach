#!/bin/bash

set -e

APP_NAME="pokemon-battle-arena"

echo "🚀 Deploying to Heroku..."

if ! heroku apps:info $APP_NAME >/dev/null 2>&1; then
    echo "📱 Creating Heroku app..."
    heroku create $APP_NAME
fi

echo "🔧 Setting up Heroku buildpacks..."
heroku buildpacks:clear --app $APP_NAME
heroku buildpacks:add heroku/nodejs --app $APP_NAME
heroku buildpacks:add heroku/python --app $APP_NAME

echo "⚙️ Setting environment variables..."
heroku config:set NODE_ENV=production --app $APP_NAME
heroku config:set PYTHON_ENV=production --app $APP_NAME

echo "🔌 Adding Heroku Redis..."
heroku addons:create heroku-redis:mini --app $APP_NAME

echo "🗄️ Adding Heroku Postgres..."
heroku addons:create heroku-postgresql:mini --app $APP_NAME

echo "📦 Deploying application..."
git push heroku main

echo "🌐 Opening application..."
heroku open --app $APP_NAME

echo "✅ Heroku deployment completed!"
echo "📊 View logs: heroku logs --tail --app $APP_NAME"
echo "⚙️ Manage app: https://dashboard.heroku.com/apps/$APP_NAME"