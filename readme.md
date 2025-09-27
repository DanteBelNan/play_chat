# 🚀 Proof of Concept: Socket Chat Application

This project serves as a **Proof of Concept (PoC)** demonstrating the architecture and real-time communication capabilities of a modern chat application. The solution is orchestrated using proxying techniques and a decoupled technology stack.

---

## 🛠️ Technology Stack

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Orchestration / Gateway** | **NGINX** | Acts as a **Reverse Proxy** for the application (handling traffic, SSL/TLS, load balancing) and as a **Proxy** for the **WebSocket** communication. |
| **Backend (API)** | **Node.js** with **Express** | Business logic layer. Uses **Socket.IO** (or the chosen socket library) for real-time, bidirectional communication with the frontend. |
| **Frontend (UI)** | **Vue.js** | Dynamic and reactive user interface. Manages the persistent connection with the backend via WebSockets. |
| **Database** | **PostgreSQL** | Persistent and structured storage for user data, messages, and session information. |

---

## 🏗️ PoC Architecture

The design is based on the separation of concerns, ensuring scalability and maintainability:

1.  **NGINX (The Mediator):**
    * **Reverse Proxy:** Receives all external requests (HTTP and WebSocket) and redirects them to the corresponding internal service (Backend or Frontend).
    * **Socket Proxy:** Specifically configured to handle the persistence and upgrade of **WebSocket** connections, ensuring real-time traffic is functional between the client (Vue) and the server (Node.js).

2.  **Backend (The Brain):**
    * Written in Node.js, it manages authentication, message logic, and interactions with the PostgreSQL database.
    * It uses Sockets to emit and receive messages instantaneously without the need for constant polling.

3.  **Frontend (The Client):**
    * A modern Vue.js application that consumes the Backend's REST API for initial data and establishes a dedicated WebSocket connection for the live message feed.

---

## ⚙️ Configuration and Deployment

This PoC is designed for easy deployment in a containerized environment (such as Docker or Kubernetes).

* **Ports:** NGINX exposes ports 80/443, while internal services communicate over a private network.
* **Key Endpoints:**
    * `/api/*`: HTTP requests directed to the Backend (Node.js).
    * `/`: Web traffic served by the Frontend (Vue.js).
    * `/socket`: Dedicated channel for WebSocket communication.

---

## 💡 Next Steps (Proof of Concept Roadmap)

1.  Basic implementation of the Socket handshake between Node.js and Vue.js.
2.  Configuration of basic message persistence in PostgreSQL.
3.  Deployment of the full stack using Docker Compose.