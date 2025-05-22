import React, { useEffect, useRef, useState } from "react";
import { io } from 'socket.io-client';
import API from '../api/api';

function ChatWindow({ chat, user }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const socket = useRef(null);

    useEffect(() => {
        socket.current = io('http://localhost:5000');
        socket.current.emit('joinRoom', chat._id);
        socket.current.on('receiveMessage', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socket.current.disconnect();
        };
    }, [chat]);

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await API.get(`/chats/${chat._id}/messages`);
            setMessages(res.data);
        };
        fetchMessages();
    }, [chat]);

    const sendMessage = async () => {
        const res = await API.post(`/chats/${chat._id}/message`, { text });
        socket.current.emit('sendMessage', res.data);
        setText('');
    };

    return (
        <div>
            <div style={{
                height: '300px',
                overflowY: 'scroll'
            }}>
                {messages.map((m) => (
                    <div key={m._id}>
                        <b>{m.senderId === user.id ? 'You' : 'They'}: </b> {m.text}
                    </div>
                ))}
            </div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatWindow;