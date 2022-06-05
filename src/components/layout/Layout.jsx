import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routing from '../Routing'
import Sidebar from '../sidebar/Sidebar'
import Topnav from '../topnav/Topnav'
import './layout.css'

const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Route render={(props) => (
                    <div className='layout'>
                        <Sidebar {...props} />
                        <div className='content'>
                            <Topnav />
                            <div className='content__main'>
                                <Routing />
                            </div>
                        </div>
                    </div>
                )} />
            </BrowserRouter>
        </>
    )
}

export default Layout