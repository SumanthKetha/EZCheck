#!/bin/bash

echo "Stopping and removing old Docker container if exists..."
CONTAINER_ID=$(docker ps -q --filter "name=ez-check")

if [ ! -z "$CONTAINER_ID" ]; then
  docker stop ez-check
  docker rm ez-check
fi

echo "Cleanup complete."
