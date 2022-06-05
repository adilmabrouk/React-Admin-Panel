import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import './topnav.css'
import notification from '../../assets/JsonData/notification.json'
import user_image from '../../assets/images/adil.jpg'
import user_menus from '../../assets/JsonData/user_menus.json'
import { Link } from 'react-router-dom'

const current_user = {
    'display_name': 'Adil Ma',
    'image': user_image
}

const notificationItems = (item, index) => {
    return (
        <div className='dropdown__items' key={index}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>)
}

const RenderCurrentUser = (user) => {
    return (
        <div className='user_menu'>
            <div className='user__image'>
                <img src={user.image} alt='user' />
            </div>
            <div className='user_name'>
                {user.display_name}
            </div>
        </div>
    )
}
const RendertUserMenu = (item, index) => {
    return (
        <Link to={item.route} key={index}>
            <div className='dropdown__items'>
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>
    )
}


const Topnav = () => {

    return (
        <div className='topnav'>
            <div className='topnav__search'>
                <input type='tex' placeholder='Search here..' />
                <i className='bx bx-search'></i>
            </div>
            <div className='topnav__right'>
                <div className='topnav__right__item'>
                    <Dropdown
                        customToggle={() => RenderCurrentUser(current_user)}
                        contentData={user_menus}
                        renderItems={(item, index) => RendertUserMenu(item, index)} />
                </div>
                <div className='topnav__right__item'>
                    <Dropdown
                        icon='bx bx-bell'
                        badge={notification.length}
                        contentData={notification}
                        renderItems={(item, index) => notificationItems(item, index)}
                    />
                </div>
                <div className='topnav__right__item'>
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default Topnav