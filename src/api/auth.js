import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;


export async function signInRequest(data) {
    // console.log(data);
    const postUrl = `${BASE_URL}/mba/api/v1/auth/signin`;
    return await axios.post(postUrl, data);
}

export async function signUpRequest(data) {
    const postUrl = `${BASE_URL}/mba/api/v1/auth/signup`;
    return await axios.post(postUrl, data);
}



