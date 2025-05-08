# COMPSCI 426 SCALABLE WEB SYSTEMS
## SPRING 2025
## FINAL PROJECT SUBMISSION

---

# Information

- Name: John Doe
- Email: johndoe@umass.edu
- Spire ID: S12345678
- GitHub User ID: johndoe123
- Graduation Semester: Spring 2025

---

# Overview

**Team Number:**
- 3

**System Name:**
- Collaborative Watercolor Canvas

**Project Description:**
- The Collaborative Watercolor Canvas is an online platform that allows
  multiple users to create and collaborate on watercolor paintings in real-time.
  The system offers a drawing interface where users can paint on a shared canvas
  and instantly see updates from other users. It solves the problem of collaborative
  artistic creation, targeting both amateur and professional artists who wish to
  engage in a real-time, shared painting experience. The application is designed
  to be scalable, with the ability to handle a growing number of simultaneous
  users through event-driven communication and microservices.

---

# Architecture Overview

**Primary Architecture Components:**
- **Frontend (React + Canvas):** Provides the user interface for creating and
  viewing collaborative watercolor paintings. It sends drawing data to the
  backend in real-time and listens for updates from other users.
- **Backend (Node.js + Express):** Handles user requests, manages artwork
  metadata, authenticates users, and publishes drawing updates to Redis. The
  backend is containerized and scalable to handle increased loads by adding
  more instances.
- **Authentication Service (JWT):** Manages user authentication and
  authorization. This service is stateless and uses JWT tokens for user
  sessions, which improves scalability.
- **Real-Time Collaboration Service (WebSocket + Redis):** Facilitates real-time
  communication by using **Redis Pub/Sub** for event-based messaging. This
  service allows users to collaborate on the same canvas in real-time without
  having to poll the server continuously.
- **Database (MongoDB):** Stores user data, painting metadata, and comments. It is
  horizontally scalable, allowing it to grow as the user base increases.
- **Docker Compose:** Orchestrates the different services, making them easier to deploy
  and scale across multiple containers. Using Docker allows the system to scale
  horizontally by running multiple instances of the backend and Redis.

**Communication Between Components:**
- The frontend communicates with the backend via REST APIs (HTTP) for
  metadata and user authentication.
- The **real-time updates** are handled using **WebSockets** between the frontend
  and the backend, with Redis Pub/Sub providing communication between the backend
  instances and the frontend clients.
- **Redis Pub/Sub** is used for efficient event-based communication. As a user
  draws on the canvas, their drawing data is sent to the backend, which then
  publishes this data to Redis. Other backend instances subscribe to Redis and
  broadcast the updates to all connected clients.
  
**Scalability Considerations:**
- Redis Pub/Sub allows us to scale horizontally across multiple backend
  instances. This means that even as the number of users grows, we can simply
  add more backend instances without worrying about complex synchronization
  issues.
- By using Docker and **Docker Compose**, we can easily scale the system by
  adding more containers for the frontend, backend, and Redis service as needed.
- The stateless nature of the authentication system, using JWT tokens, ensures
  that new instances of the backend can be spun up without requiring any
  session persistence, which is crucial for scalability.

**Data Storage:**
- **MongoDB** stores user data, painting metadata, and comments in a scalable
  NoSQL database. MongoDB’s sharding capabilities allow it to scale horizontally
  across multiple nodes to handle large volumes of data as the system grows.
- **AWS S3** is used for storing large images of paintings, as it can handle
  petabytes of data and scale automatically based on usage.

# Architecture Diagram

```mermaid
graph LR;
    A["Frontend (React + Canvas)"] -->|"HTTP Requests (REST API)"| B["Backend (Node.js Express)"];
    B -->|CRUD Operations| C[MongoDB Database];
    B -->|User Authentication| D["Auth Service (JWT)"];
    A -->|Real-time Collaboration (WebSocket)| E["Collaborative Painting Service"];
    E -->|Redis Pub/Sub| F[Redis];
    F -->|Publish/Subscribe Events| B;
    F -->|Publish/Subscribe Events| A;
    B -->|Containerized in| G[Docker Compose];
    C -->|Artwork Storage| H["Image Storage (AWS S3)"];
    A -->|Fetch Paintings| H;
    D -->|JWT Tokens for Secure Access| A;
    G -->|Containers for Frontend, Backend, Auth, and Real-Time| A;
    G -->|Containers for Database and Image Storage| C;
    G -->|Containers for Collaborative Service and Redis| E;
```

---

# Code Demonstration

## Front-End Code

```javascript
// Front-end React code for the drawing canvas

import React, { useState, useEffect } from 'react';

function Canvas() {
    const [drawings, setDrawings] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to WebSocket server for real-time updates
        const socketConnection = new WebSocket('ws://localhost:4000');
        setSocket(socketConnection);

        socketConnection.onmessage = (event) => {
            setDrawings(JSON.parse(event.data));
        };

        return () => socketConnection.close();
    }, []);

    // Function to handle drawing events
    const handleDraw = (x, y) => {
        // Send drawing data to the backend for real-time collaboration
        fetch('http://localhost:3000/draw', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ x, y })
        });
    };

    return (
        <div>
            <canvas id="canvas" width="800" height="600" onMouseMove={(e) => handleDraw(e.clientX, e.clientY)}></canvas>
            <div>Draw on the canvas!</div>
        </div>
    );
}

export default Canvas;
```

- **Description:** 
  This code provides the frontend React component that allows users to
  interact with the shared canvas in real-time. The drawing data is sent to
  the backend when the user moves the mouse, and the frontend listens for
  real-time updates from the backend through WebSockets.

## Microservice Code

```typescript
import express from 'express';
import redis from 'redis';
import WebSocket from 'ws';

const app = express();

// Create a Redis client to connect to the Redis server
const client = redis.createClient();

// Create a WebSocket server to manage client connections
const wss = new WebSocket.Server({ noServer: true });

// Store connected WebSocket clients
const clients: WebSocket[] = [];

// Middleware to parse incoming JSON requests
app.use(express.json());

// Endpoint to handle drawing events (e.g., from the frontend canvas) and publish them to Redis
app.post('/draw', (req, res) => {
    // Extract the drawing data (x and y coordinates) from the request body
    const { x, y } = req.body;

    // Validate the incoming data to ensure it has the correct format
    if (typeof x !== 'number' || typeof y !== 'number') {
        return res.status(400).send('Invalid drawing data. Coordinates must be numbers.');
    }

    // Prepare the drawing event data as an object
    const drawingEvent = { x, y };

    // Convert the drawing data to a JSON string and publish it to the Redis channel 'drawings'
    client.publish('drawings', JSON.stringify(drawingEvent), (err, reply) => {
        if (err) {
            // If there is an error publishing to Redis, log the error and send a failure response
            console.error('Error publishing drawing event to Redis:', err);
            return res.status(500).send('Failed to send drawing event');
        }
        // If the message is successfully published, send a success response
        console.log(`Published drawing event to Redis: ${JSON.stringify(drawingEvent)}`);
        res.status(200).send('Drawing event sent');
    });
});

// Redis subscriber to listen for drawing events from the Redis channel
client.on('message', (channel, message) => {
    // Check if the message is coming from the correct Redis channel ('drawings')
    if (channel === 'drawings') {
        // Parse the drawing event message received from Redis
        const drawingData = JSON.parse(message);

        // Log the incoming drawing data
        console.log('New drawing event received:', drawingData);

        // Broadcast the drawing data to all connected WebSocket clients
        clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(drawingData)); // Send the drawing data to the client
            }
        });
    }
});

// Subscribe to the 'drawings' channel for real-time updates from Redis
client.subscribe('drawings', (err, reply) => {
    if (err) {
        // If there is an error subscribing to the Redis channel, log the error
        console.error('Error subscribing to Redis channel "drawings":', err);
    } else {
        // Confirm that the subscription was successful
        console.log('Successfully subscribed to Redis channel "drawings"');
    }
});

// Handle WebSocket connections for real-time drawing collaboration
wss.on('connection', (ws) => {
    // Add the new WebSocket client to the list of connected clients
    clients.push(ws);
    console.log('New WebSocket client connected, total clients:', clients.length);

    // Handle the WebSocket client closing the connection
    ws.on('close', () => {
        const index = clients.indexOf(ws);
        if (index !== -1) {
            clients.splice(index, 1); // Remove the client from the connected clients array
        }
        console.log('WebSocket client disconnected, total clients:', clients.length);
    });

    // Handle WebSocket client errors
    ws.on('error', (err) => {
        console.error('WebSocket error:', err);
    });
});

// Handle WebSocket upgrade requests
app.server = app.listen(3000, () => {
    console.log('Backend service running on port 3000');
});

// Upgrade HTTP server to WebSocket server
app.server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request); // Establish the WebSocket connection
    });
});
```

- **Description:**
This code implements the backend microservice that handles real-time
drawing events using Redis Pub/Sub. When a user submits drawing data
from the frontend, the backend receives the coordinates via a `POST`
request and validates them. The backend then publishes these drawing
events to the Redis `drawings` channel, ensuring that all other backend
instances and clients are notified. The backend is also subscribed to
the `drawings` channel, allowing it to receive drawing events from Redis
and broadcast them to all connected WebSocket clients. This enables
real-time updates, so every client sees the same changes on the shared
canvas. The use of Redis Pub/Sub ensures that the system is horizontally
scalable, as adding more backend instances will not interfere with event
synchronization or performance.

---

# Docker Configuration

## Dockerfile

```dockerfile
# Dockerfile for the backend service

FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port for the app to run
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
```

- **Description:**
  This Dockerfile sets up the backend service by copying the necessary
  files, installing dependencies, and exposing port 3000 for API communication.

## docker-compose.yml

```yaml
# Docker Compose configuration to set up frontend, backend, Redis, and MongoDB

version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
    ports:
      - "8080:8080"
  backend:
    build:
      context: ./backend
    ports:
      - "3000:3000"
    depends_on:
      - redis
      - mongodb
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
  mongodb:
    image: mongo:4.4
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
```

- **Description:**
  The `docker-compose.yml` file defines services for the frontend, backend,
  Redis, and MongoDB. It sets up the backend service to depend on Redis and
  MongoDB and ensures that the components can communicate via the respective ports.

---

# Reflection

**What I Learned:**
- Through this project, I learned the importance of **event-driven** architecture
  in building scalable systems. Using Redis Pub/Sub to handle real-time collaboration
  allows the system to scale easily by adding more backend instances without needing
  complex synchronization. This was an important takeaway as it directly impacts
  the ability to support thousands of users with minimal overhead.
- I also learned how containerization with **Docker** simplifies the process of
  deploying and scaling the application. By using **Docker Compose**, I can easily
  manage the services and scale them independently as needed.

---

**Additional Notes (Optional):**
- One of the challenges I faced was ensuring that the real-time updates were
  synchronized correctly, particularly when multiple backend instances are running.
  Redis Pub/Sub solved this problem by acting as a message broker that ensures
  all instances are kept in sync without requiring complex setup.
