#!/bin/sh
set -e

REQUIRED_VARS="DB_USER DB_PASS DB_NAME DB_PORT DB_HOST"

for var in $REQUIRED_VARS; do
    if [ -z "$eval echo \$$var" ]; then
        echo "❌ Environment variable $var is not set"
        exit 1
    fi
done

echo "✅ All environment variables are set"

# Run database seeding in development
if [ "$NODE_ENV" = "development" ]; then
    echo "🌱 Running database seed..."
    npm run seed
    echo "✅ Database seeding completed"
fi

exec "$@"