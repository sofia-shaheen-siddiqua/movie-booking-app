import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ROLES } from '../../constants/userRoles';


const Signup = (props) => {
    const { goToLogin, handleSignupSubmit, errorMsg, successMsg } = props;

    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState(ROLES.CUSTOMER);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            userId, name: userName, password, email, userType
        }
        handleSignupSubmit(data);

    }

    return (
        <div className='signup'>
            <form onSubmit={handleSubmit}
                className='signup_form'>
                <h2>Register</h2>
                <p className='text-success'>{successMsg}</p>
                <div className='input-group my-1'>
                    <input type='text'
                        className='form-control'
                        value={userId}
                        placeholder='Enter User Id'
                        onChange={e => setUserId(e.target.value)} />
                </div>
                <div className='input-group my-1'>
                    <input type='text'
                        className='form-control'
                        value={userName}
                        placeholder='Enter User name'
                        onChange={e => setUserName(e.target.value)} />
                </div>
                <div className='input-group my-1'>
                    <input type='password'
                        className='form-control'
                        value={password}
                        placeholder='Enter password'
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='input-group my-1'>
                    <input type='email'
                        className='form-control'
                        value={email}
                        placeholder='Enter your Email'
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='d-flex justify-content-center align-items-center my-1'>
                    <label htmlFor='userType'>User Type: </label>
                    <DropdownButton
                        variant='light'
                        id='userType'
                        title={userType}
                        onSelect={e => setUserType(e)}>
                        <Dropdown.Item eventKey={ROLES.CUSTOMER}>{ROLES.CUSTOMER}</Dropdown.Item>
                        <Dropdown.Item eventKey={ROLES.CLIENT} >{ROLES.CLIENT}</Dropdown.Item>
                    </DropdownButton>
                </div >
                <div className='my-2 input-group'>
                    < input type='submit' className='form-control btn btn-secondary' />
                </div>
                <p className='text-muted'>Already have an account? <span onClick={goToLogin}>Click here to Login</span></p>
                <p className='text-danger'>{errorMsg}</p>

            </form>
        </div>
    )
}

export default Signup