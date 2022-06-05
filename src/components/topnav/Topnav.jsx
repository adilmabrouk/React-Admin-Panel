import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import './topnav.css'
import notification from '../../assets/JsonData/notification.json'
import { Link } from 'react-router-dom'

const renderNotificationItems = (item, index) => {
    return (
        <div className='notification__item' key={index}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    )
}
const Topnav = () => {

    //create an array of users



    console.log(notification);
    return (
        <div className='topnav'>
            <div className='topnav__search'>
                <input type='tex' placeholder='Search here..' />
                <i className='bx bx-search'></i>
            </div>
            <div className='topnav__right'>
                <div className='topnav__right__item'>
                    <Dropdown icon='bx bx-user' />
                </div>
                <div className='topnav__right__item'>
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notification}
                        renderItems={(item, index) => renderNotificationItems(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>} />
                </div>
                <div className='topnav__right__item'>
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default Topnav