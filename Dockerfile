
FROM node:18-alpine as node-deps

WORKDIR /app
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm ci --only=production

FROM python:3.11-slim as python-deps

WORKDIR /app
COPY api/requirements.txt ./api/
RUN pip install --no-cache-dir -r api/requirements.txt

FROM python:3.11-slim as final


RUN apt-get update && apt-get install -y \
    curl \
    nginx \
    supervisor \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app


COPY --from=python-deps /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=python-deps /usr/local/bin /usr/local/bin


COPY --from=node-deps /app/server/node_modules ./server/node_modules


COPY . .


COPY nginx.conf /etc/nginx/nginx.conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf


RUN mkdir -p /var/log/supervisor /app/data /app/logs


RUN chmod +x deploy/*.sh || true
RUN chown -R www-data:www-data /app


HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

EXPOSE 80 3000 8000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]