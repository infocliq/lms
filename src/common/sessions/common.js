
// return the user data from the session storage
export const getUser = () => {
    return sessionStorage.getItem('isAuth') || null;
}

// return the admin data from the session storage
export const getAdmin = () => {
    return sessionStorage.getItem('device') || null;
}


// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    sessionStorage.clear();
}

// set the token and user from the session storage
export const setUserSession = (token, userId, isAdmin) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('isAuth', userId);
    sessionStorage.setItem('device', isAdmin)
}