#!/bin/bash

echo "Running new Docker container..."

docker pull kethasumanth480/ez-check:latest

docker run -d \
  --name ez-check \
  -p 80:80 \
  kethasumanth480/ez-check:latest

echo "Container started."
