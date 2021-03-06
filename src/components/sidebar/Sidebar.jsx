import React from 'react'
import './sidebar.css'
import logo from '../../assets/images/logo.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'

const SidebarItems = props => {
    const active = props.active ? 'active' : '';
    return (
        <div className='sidebar__items'>
            <div className={`sidebar__item ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}
const Sidebar = (props) => {

    //active item
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <img src={logo} alt='company logo' />
            </div>
            {sidebar_items.map((item, index) => {
                return (
                    <Link
                        to={item.route}
                        key={index}>
                        <SidebarItems
                            icon={item.icon}
                            title={item.display_name}
                            active={index === activeItem} />
                    </Link>
                )
            })}
        </div>
    )
}

export default Sidebar