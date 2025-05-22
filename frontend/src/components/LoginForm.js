import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

function LoginForm({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await API.post('/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Log in</button>
        </form>
    );
}

export default LoginForm;