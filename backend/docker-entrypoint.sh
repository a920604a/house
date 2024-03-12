# docker-entrypoint.sh
#!/bin/bash


# Make migrations
echo "Make migrations"
python /app/manage.py makemigrations

# Apply database migrations
echo "Apply database migrations"
python /app/manage.py migrate

exec "$@"