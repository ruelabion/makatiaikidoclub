#!/bin/bash
# Makati Aikido Club - Local Development Server

PORT=${1:-8002}

echo "🥋 Starting Makati Aikido Club on http://localhost:$PORT"
echo "Press Ctrl+C to stop"
echo ""

if command -v python3 &> /dev/null; then
    echo "Using Python 3..."
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    echo "Using Python 2..."
    python -m SimpleHTTPServer $PORT
elif command -v ruby &> /dev/null; then
    echo "Using Ruby..."
    ruby -run -httpd . -p $PORT
else
    echo "❌ Error: No suitable server found"
    echo "Please install Python, Ruby, or Node.js and try again"
    exit 1
fi
