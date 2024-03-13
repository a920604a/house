# docker-entrypoint.sh
#!/bin/bash


# Make migrations
echo "[Entrypoint] Make migrations"
python /app/manage.py makemigrations

# Apply database migrations
echo "[Entrypoint] Apply database migrations"
python /app/manage.py migrate

exec "$@"