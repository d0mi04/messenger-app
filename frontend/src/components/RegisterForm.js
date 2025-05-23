import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

function RegisterForm() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post('/auth/register', form);
        navigate('/login');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" onChange={(e) => setForm({ 
                ...form, 
                username: e.target.value})}
            />
            <input placeholder="email" onChange={(e) => setForm({ 
                ...form, 
                email: e.target.value})}
            />
            <input placeholder="password" type="password" onChange={(e) => setForm({ 
                ...form, 
                password: e.target.value})}
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;