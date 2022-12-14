import React from 'react';
import { useNavigate } from 'react-router-dom';

const Customer = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }
    return (
        <div>
            <h2>Customer</h2>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default Customer