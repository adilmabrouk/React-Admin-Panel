import React from 'react'
import './test.css'

const Test = props => {
    return (
        <div>
            <div className='dropdown__toggle'>
                <button>
                    {
                        props.icon ? <i className={props.icon}></i > : ''
                    }
                    {
                        props.badge ? <span className='badge'>{props.badge}</span> : ''
                    }

                </button>
                <div className='dropdown__content'>
                    {
                        props.contentData && props.ItemsRender ? props.contentData.map((item, index) => props.ItemsRender(item, index)) : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Test