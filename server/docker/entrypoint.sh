#!/bin/sh
set -e

REQUIRED_VARS="DB_USER DB_PASSWORD DB_NAME DB_PORT DB_HOST"

for var in $REQUIRED_VARS; do
    if [ -z "$eval echo \$$var" ]; then
        echo "❌ Environment variable $var is not set"
        exit 1
    fi
done

echo "✅ All environment variables are set"
exec "$@"