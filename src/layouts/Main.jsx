import React, { useEffect } from 'react'
import { Header } from '../views/components/header'
import { SideNav } from '../views/components/sidenav'
import { auth } from "../firebase/config";
import { useHistory } from "react-router-dom";

export default ({ children }) => {
    const navigate = useHistory();
    const jwt = localStorage.getItem('jwt')
    useEffect(() => {
        if (jwt && auth) {
            console.log('authorized')
        } else {
            localStorage.clear()
            navigate.push("/login")
        }
    });
    return (
        <>
            <SideNav />
            <Header />
            {children}
        </>
    )
}

