import React from 'react'
import './status-card.css'
const StatusCrad = props => {
    return (
        <div className='card'>
            <div className='container'>
                <div className='card__icon'>
                    <i className={props.icon}></i>
                </div>
                <div className='card__content'>
                    <h1>{props.count}</h1>
                    <small>{props.title}</small>
                </div>
            </div>
        </div>
    )
}

export default StatusCrad