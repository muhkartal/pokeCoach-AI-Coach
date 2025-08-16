web: supervisord -c supervisord.conf
api: python -m uvicorn api.main:app --host 0.0.0.0 --port $PORT
server: node server/server.js