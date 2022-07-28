import React, { useState } from 'react';
import './authentication.css';
import Login from '../../components/Login/login';
import Signup from '../../components/Signup/signup';
import { useNavigate } from 'react-router-dom'


const Authentication = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [errorMsg, setErrorMsg] = useState('arrrr');
    const [successMsg, setSuccessMsg] = useState('hahaah');

    const navigate = useNavigate();

    const goToSignup = () => {
        setShowSignup(true);
    }

    const goToLogin = () => {
        setShowSignup(false);
    }

    const handleLoginSubmit = (data) => {
        console.log(data)
        navigate('/customer')
    }

    const handleSignupSubmit = (data) => {

    }
    return (
        <div className='authentication'>
            {showSignup ?
                <Signup goToLogin={goToLogin} handleSignupSubmit={handleSignupSubmit}
                    errorMsg={errorMsg} successMsg={successMsg}
                /> :
                <Login goToSignup={goToSignup} handleLoginSubmit={handleLoginSubmit}
                    errorMsg={errorMsg} successMsg={successMsg}
                />}
        </div>
    )
}

export default Authentication