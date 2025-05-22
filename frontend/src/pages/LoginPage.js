import React from "react";
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function LoginPage({ setUser }) {
    return (
        <div style={{
            display: 'flex',
            gap: '3rem'
        }}>
            <div>
                <h2>Log in</h2>
                <LoginForm setUser={setUser} />
            </div>
            <div>
                <h2>Register</h2>
                <RegisterForm />
            </div>
        </div>
    );
}

export default LoginPage;