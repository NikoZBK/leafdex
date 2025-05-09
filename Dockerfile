FROM node:20-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY leafDex_Web/package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY leafDex_Web/ ./

# Build the application
RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Copy built files from build stage to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 