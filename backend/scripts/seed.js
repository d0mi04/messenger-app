const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Chat = require('../models/Chat');
const Message = require('../models/Message');

const MONGO_URI = 'your_mongo_db_uri';

// mongoose.connect(MONGO_URI)
//     .then(async () => {
//         console.log('Connected to MongoDB, seeding...');
//         await User.deleteMany({});
//         await Chat.deleteMany({});
//         await Message.deleteMany({});

//         const pass
//     })
async function seed() {
    await mongoose.connect(MONGO_URI);
    await User.deleteMany({});
    await Chat.deleteMany({});
    await Message.deleteMany({});

    const password1 = await bcrypt.hash("password123", 10);
    const password2 = await bcrypt.hash("secret456", 10);

    const user1 = new User({
        username: 'Jack',
        email: 'jack@example.com',
        passwordHash: password1
    });
    const user2 = new User({
        username: 'Alice',
        email: 'alice@example.com',
        passwordHash: password2
    });

    await user1.save();
    await user2.save();

    const chat = new Chat({ users: [user1._id, user2._id] });
    await chat.save();

    const msg1 = new Message({
        chatId: chat._id,
        senderId: user1._id,
        text: 'Hi, Jack here. How are you?'
    });
    const msg2 = new Message({
        chatId: chat._id,
        senderId: user2._id,
        text: 'Hi Jack, nice to hear from you. I am doing great.'
    });

    await msg1.save();
    await msg2.save();

    console.log("📦 Dane przykładowe zostały zapisane!");
    mongoose.connection.close();
    process.exit();
}

seed().catch(err => {
  console.error("❌ Błąd podczas seedowania bazy danych:", err);
});
