

const storeUserData = (data) => {
    const { name, userId, email, userTypes, userStatus, accessToken } = data;
    localStorage.setItem('name', name);
    localStorage.setItem('userId', userId);
    localStorage.setItem('email', email);
    localStorage.setItem('userTypes', userTypes);
    localStorage.setItem('userStatus', userStatus);
    localStorage.setItem('accessToken', accessToken);
}

export default storeUserData