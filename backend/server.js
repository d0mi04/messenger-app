require('dotenv').config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require('socket.io');

const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true
    }
});

global._io = io;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chats', chatRoutes);

io.on('connection', (socket) => {
    console.log('New connection:', socket.id);

    socket.on('joinRoom', (roomId) => {
        socket.join(roomId);
    });

    socket.on('sendMessage', (data) => {
        io.to(data.chatId).emit('receiveMessage', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB Atlas');
        server.listen(5000, () => {
            console.log('🚀 Backend is running on http://localhost:5000');
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
    });
