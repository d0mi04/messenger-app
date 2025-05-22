const express = require('express');
const Chat = require('../models/Chat');
const Message = require('../models/Message');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, async (req, res) => {
    const chats = await Chat.find({ users: req.userId })
        .sort({ updatedAt: -1 })
        .populate('users', 'username');
    res.json(chats);
});

router.get('/:chatId/messages', auth, async (req, res) => {
    const messages = await Message.find({ chatId: req.params.chatId })
        .sort({ createdAt: 1});
    res.json(messages);
});

router.post('/:chatId/message', auth, async (req, res) => {
    const { text } = req.body;
    const message = new Message({
        chatId: req.params.chatId,
        senderId: req.userId,
        text
    });

    await message.save();
    await Chat.findByIdAndUpdate(req.params.chatId, {
        lastMessage: text,
        updatedAt: new Date()
    });

    const io = global._io;
    io.to(req.params.chatId).emit('receiveMessage', message);

    res.json(message);
});

module.exports = router;