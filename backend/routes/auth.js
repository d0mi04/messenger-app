const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const existing = await User.findOne({ email });
    if(existing) {
        return res.status(400).json({
            message: 'Email already exists'
        });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({ username, email, passwordHash });
    await user.save();

    res.status(201).json({
        message: 'User created.'
    });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) {
        return res.status(400).json({
            message: 'Invalid email or password'
        });
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);

    if(!isValid) {
        return res.status(400).json({
            message: 'Invalid password'
        });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({
        token,
        user: {
            id: user._id,
            username: user.username
        }
    });
});

module.exports = router;