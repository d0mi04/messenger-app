import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      const decoded = jwtDecode(token);
      setUser({ id: decoded.userId });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/" element={user ? <HomePage user={user} /> : <navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;