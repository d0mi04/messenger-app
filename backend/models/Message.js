const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatId: {type: mongoose.Schema.Types.ObjectId, ref: 'Chat'},
    senderId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    text: String,
    read: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Message', messageSchema);