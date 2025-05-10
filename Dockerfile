FROM node:20-alpine as build

WORKDIR /app

COPY leafDex_Web/package*.json ./
RUN npm ci

COPY leafDex_Web/ ./

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 