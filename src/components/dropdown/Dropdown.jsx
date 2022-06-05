import React from 'react'
import './dropdown.css'

const Dropdown = props => {
    return (
        <div className='dropdown'>
            <button className='dropdown__toggle'>
                {props.icon ? <i className={props.icon}></i> : ''}
                {props.badge ? <span className='dropdown__toggle__badge'>{props.badge}</span> : ''}
                {props.dropDownToggle ? props.dropDownToggle() : ''}
            </button>
            <div className='dropdown__content active'>
                {props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''}
                {props.renderFooter ? (<div className='dropdown__footer'>{props.renderFooter()}</div>) : ''}
            </div>
        </div>
    )
}

export default Dropdown