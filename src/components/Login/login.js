import React, { useEffect, useState } from 'react'

const Login = (props) => {
    const { goToSignup, handleLoginSubmit, errorMsg, successMsg } = props;
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            userId, password
        }
        handleLoginSubmit(data);

    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}
                className='login_form'>
                <h3>Login</h3>
                <p className='text-success'>{successMsg}</p>
                <div className='input-group my-1'>
                    <input type='text'
                        className='form-control'
                        value={userId}
                        placeholder='Enter User Id'
                        onChange={e => setUserId(e.target.value)} />
                </div>
                <div className='input-group my-1'>
                    <input type='password'
                        className='form-control'
                        value={password}
                        placeholder='Enter password'
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='my-2 input-group'>
                    <input type='submit' value='Login' className='form-control btn btn-secondary' />

                </div>
                <p className='text-muted'>Don't have an account?<span onClick={goToSignup}>Click here to Signup</span></p>
                <p className='text-danger mb-1'>{errorMsg}</p>

            </form>
        </div>
    )
}

export default Login