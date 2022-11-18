import React, { useEffect, useState } from 'react'

import { Header } from '../views/components/header'
import { SideNav } from '../views/components/sidenav'
import { useHistory } from "react-router-dom";
import { getToken, removeUserSession, getUser } from '../common/sessions/common';
import Axios from 'axios';
import { baseUrl } from '../constants/constants';

export default ({ children }) => {
    const navigate = useHistory();
    const token = getToken();
    const userId = getUser()
    useEffect(() => {
        verifyAuth()
    }, []);

    const verifyAuth = async () => {
        try {
            const { data } = await Axios.get(
                baseUrl + "/api/users/" + userId, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            if (data.success === 0) {
                removeUserSession()
                navigate.push('/login')
            }

        } catch (ex) {
            console.log(ex);
        }
    }

    return (
        <>
            <SideNav />
            <Header />
            {children}
        </>
    )
}

