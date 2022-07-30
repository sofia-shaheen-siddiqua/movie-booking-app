import React from 'react'
import { useNavigate } from 'react-router-dom';

const Client = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
            <h3>Client Page</h3>
            <button className='btn btn-secondary'
                onClick={logout}>logout</button>
        </div>
    )
}

export default Client