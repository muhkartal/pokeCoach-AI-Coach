#!/bin/bash

set -e

BACKUP_DIR="/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
POSTGRES_HOST="postgres"
POSTGRES_USER="pokemon_user"
POSTGRES_DB="pokemon_battle"

echo "🗄️ Starting database backup at $(date)"

mkdir -p "$BACKUP_DIR"

BACKUP_FILE="$BACKUP_DIR/pokemon_battle_${TIMESTAMP}.sql"
echo "📦 Creating backup: $BACKUP_FILE"

PGPASSWORD="$POSTGRES_PASSWORD" pg_dump \
    -h "$POSTGRES_HOST" \
    -U "$POSTGRES_USER" \
    -d "$POSTGRES_DB" \
    --verbose \
    --no-owner \
    --no-privileges \
    --clean \
    --if-exists \
    > "$BACKUP_FILE"

echo "🗜️ Compressing backup..."
gzip "$BACKUP_FILE"
COMPRESSED_BACKUP="${BACKUP_FILE}.gz"

echo "✅ Verifying backup..."
if [ -f "$COMPRESSED_BACKUP" ] && [ -s "$COMPRESSED_BACKUP" ]; then
    echo "✅ Backup created successfully: $COMPRESSED_BACKUP"
    
    BACKUP_SIZE=$(du -h "$COMPRESSED_BACKUP" | cut -f1)
    echo "📏 Backup size: $BACKUP_SIZE"
else
    echo "❌ Backup verification failed!"
    exit 1
fi

echo "🧹 Cleaning up old backups..."
find "$BACKUP_DIR" -name "pokemon_battle_*.sql.gz" -mtime +7 -delete

echo "✅ Database backup completed successfully at $(date)"