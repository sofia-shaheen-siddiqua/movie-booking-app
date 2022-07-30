import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div>
            <h2>Admin</h2>
            <button className='btn btn-secondary' onClick={logout}>logout</button>
        </div>
    )
}

export default Admin