const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const session = require('express-session');
const { connectDB } = require('./db');

const app = express();
const server = http.createServer(app); 
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(session({
    secret: process.env.SECRET_KEY, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } 
}));

// 2. WebSockets Configuration (Socket.IO)
const io = new Server(server, { //should implement some kind of router for sockets later
    cors: {
        origin: "*", //Allows connections from any frontend (should change later)
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`[Socket.IO] Client connected: ${socket.id}`);

    socket.on('chat_message', (msg) => {
        console.log(`MSG: ${msg}`);

        io.emit('message_received', `User ${socket.id.substring(0, 4)} says: ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log(`[Socket.IO] Client disconnected: ${socket.id}`);
    });
});

// 3. Server Routes (should use router later)
app.get('/', (req, res) => {
    res.send('WebServer && Sockets running');
});


// 4. Starting server
async function startServer() {
    try {
        await connectDB();
        
        server.listen(PORT, () => {
            console.log(`WebServer and Sockets listening in port ${PORT}`);
        });

    } catch (error) {
        console.error('Error: ', error.message);
        process.exit(1); 
    }
}

startServer();