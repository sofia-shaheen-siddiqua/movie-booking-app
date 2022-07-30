import React, { useState, useEffect } from 'react';
import './authentication.css';
import Login from '../../components/Login/login';
import Signup from '../../components/Signup/signup';
import { useNavigate } from 'react-router-dom';
import { signInRequest, signUpRequest } from '../../api/auth';
import storeUserData from '../../utils/storeUserData';
import { ROLES } from '../../constants/userRoles';


const Authentication = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const navigate = useNavigate();

    const redirectToPage = (userTypes) => {
        if (userTypes === ROLES.CUSTOMER) {
            navigate('/customer');
        }
        else if (userTypes === ROLES.CLIENT) {
            navigate('/client');
        }
        else {
            navigate('./admin');
        }
    }

    //The useEfeect below makes sure that if the data is present in the local storage,the login/signup
    //(authentication)component is not shown.The user is instead redirected to his/her page
    //depending on the userTypes.This is also useful when a user hits the back arrow in the 
    //window tap after logging in.

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            const userTypes = localStorage.getItem('userTypes');
            redirectToPage(userTypes);
        }

    }, [])

    const goToSignup = () => {
        setShowSignup(true);
    }

    const goToLogin = () => {
        setShowSignup(false);
    }

    const handleLoginSubmit = (data) => {
        signInRequest(data).then(res => {
            const { status, message, data } = res;
            //Here the code will be 200 becoz we are just sending data, not creating
            if (status === 200) {
                //Success response,but login credentials are incorrect
                if (message) {
                    setErrorMsg(message);
                }
                //This is the case of successful login with correct credentials.
                else {
                    //store data in local storage
                    storeUserData(data);
                    //redirect to respective page based on the userType
                    redirectToPage(data.userTypes);
                }

            }
        }).catch(err => {
            setErrorMsg(err?.response?.data?.message || err?.message);
        })
        // console.log(data)
        // navigate('/customer')
    }

    const handleSignupSubmit = (data) => {
        signUpRequest(data).then(res => {
            const { status, message, data } = res;
            //Here the ststus code will be 201, bcoz we are ceating.
            if (status === 201) {
                setSuccessMsg('Signup successful,Plese Login');
                setShowSignup(false);
            }
            //some fault with the data provided,check the data object
            else if (message) {
                setErrorMsg(message);
            }
        }).catch(err => {
            console.log(err);
        })

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