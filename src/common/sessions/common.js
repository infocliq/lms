
// return the user data from the session storage
export const getUser = () => {
    return sessionStorage.getItem('isAuth') || null;
}

// return the verify admin data from the session storage
export const getIsAdmin = () => {
    return sessionStorage.getItem('role') || null;
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
}

// set the admin or user verify from the session storage
export const setVerifyAdmin = (success) => {
    sessionStorage.setItem('role', success);
}