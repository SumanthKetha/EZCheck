# Stage 1: Build Angular app
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the Angular app in production mode
RUN npm run build -- --configuration=production

# Stage 2: Serve app with nginx
FROM nginx:stable-alpine



# Copy built files from Stage 1
COPY --from=build /app/dist/ez-check /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
