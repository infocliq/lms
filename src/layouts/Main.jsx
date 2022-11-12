import React from 'react'
import { Header } from '../views/components/header'
import { SideNav } from '../views/components/sidenav'

export default ({ children }) => {

    console.log('render Main')

    return (
        <>
            <SideNav />
            <Header />
            {children}
        </>
    )
}

