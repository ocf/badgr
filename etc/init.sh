#!/usr/bin/env bash

# Copy the configuration from a kube share mounted at /badgr/config
cp /badgr/config/settings_local.py /badgr/badgr-server/apps/mainsite/settings_local.py

# Run migrations and copy around static files.
cd /badgr/badgr-server
./manage.py migrate
./manage.py dist
./manage.py collectstatic

# TODO: Figure out why the "production" webserver doesn't send CORS headers.
# Start the webserver.
uwsgi --ini uwsgi.ini &

nginx -g "daemon off;"
