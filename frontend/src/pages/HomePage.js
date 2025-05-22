import React from "react";
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';

function HomePage({ user }) {
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <div style={{
            display: 'flex',
            gap: '2rem'
        }}>
            <ChatList user={user} setSelectedChat={setSelectedChat} />
            {selectedChat && <ChatWindow chat={selectedChat} user={user} />}
        </div>
    );
}

export default HomePage;