# Docker Setup for LeafDex

This document describes how to run the LeafDex application using Docker.

## Prerequisites

- Docker and Docker Compose installed on your machine
  - [Install Docker](https://docs.docker.com/get-docker/)
  - [Install Docker Compose](https://docs.docker.com/compose/install/)

## Running the Application

### Production Build

To run the production version of the application:

```bash
docker-compose up leafdex-web
```

This will build the React application and serve it using Nginx on port 80.

### Development Mode

To run the application in development mode with hot reloading:

```bash
docker-compose up leafdex-web-dev
```

This will run the Vite development server on port 5173. Any changes you make to the code will be reflected immediately in the browser.

## Building the Images

If you want to build the Docker images without starting the containers:

```bash
# Build production image
docker-compose build leafdex-web

# Build development image
docker-compose build leafdex-web-dev
```

## Stopping the Application

To stop the running containers:

```bash
docker-compose down
```

## Cleaning Up

To remove the built Docker images:

```bash
docker-compose down --rmi all
```

## Troubleshooting

If you encounter any issues with the Docker setup, try the following:

1. Make sure Docker and Docker Compose are installed and running.
2. Try rebuilding the images: `docker-compose build --no-cache`
3. Check the logs: `docker-compose logs -f`
