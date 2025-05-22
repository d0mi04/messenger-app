import React, { useState, useEffect } from "react";
import API from '../api/api';

function ChatList({ user, setSelectedChat }) {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const fetchChats = async () => {
            const res = await API.get('/chats');
            setChats(res.data);
        };
        fetchChats();
    }, []);

    return (
        <div>
            <h2>Twoje czaty</h2>
            <ul>
                {chats.map((chat) => (
                    <li key={chat._id} onClick={() => setSelectedChat(chat)}>
                        {chat.users.filter(u => u._id !== user.id)[0]?.username || 'Anonim'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatList;