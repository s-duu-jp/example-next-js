#!/bin/sh

# fronetend permission change
sudo chown -R $USER:$USER /workspace/frontend

# Frontend Setting
cd /workspace/frontend/web/
bun install --frozen-lockfile
