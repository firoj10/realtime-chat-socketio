// Import required packages
const express = require('express');
const http = require('http');
const cors = require('cors');

// Import Socket.IO server
const { Server } = require("socket.io");

// Create Express app
const app = express();

// Enable CORS so frontend can connect
app.use(cors());

// Create HTTP server using Express app
const server = http.createServer(app);

// Create Socket.IO server and allow all origins
const io = new Server(server, {
  cors: {
    origin: '*', // allow all frontend origins
    methods: ['GET', 'POST']
  }
});

// Listen for new socket connections
io.on('connection', (socket) => {
    // Log when a user connects
    console.log('User connected:', socket.id);

    // When a user joins a room
    socket.on('join_room', (room) => {
        socket.join(room); // join the specified room
        console.log(`User ${socket.id} joined the room ${room}`)
    });

    // When a message is sent
    socket.on('send_message' , (data) => {
        // Send the message to all users in the room except the sender
        socket.to(data.room).emit('receive_message', data)
    });

    // When a user is typing
    socket.on('typing', ({username, room}) => {
        // Notify other users in the room that someone is typing
        socket.to(room).emit('user_typing', username)
    });

    // When a user disconnects
    socket.on('disconnect', () => {
         console.log('User disconnected:', socket.id);
    })
})

// Start server on port 3001
server.listen(3001, () => {
    console.log('Server listening on port 3001');
});
