#!/bin/bash

# Run npm install if package-lock.json exists, otherwise run yarn install
if [ -f package-lock.json ]; then
    echo "Running npm install..."
    npm install
elif [ -f yarn.lock ]; then
    echo "Running yarn install..."
    yarn install
else
    echo "No lockfile found. Please ensure you have package-lock.json or yarn.lock in your project directory."
    exit 1
fi
