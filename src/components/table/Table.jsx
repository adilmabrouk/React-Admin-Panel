import React from 'react'
import './table.css'

const Table = props => {
    return (
        <div className='table__wrapper'>
            <table>
                <thead>
                    <tr>
                        {
                            props.headData && props.renderHead ? (props.headData.map((item, index) => props.renderHead(item, index))) : null
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.bodyData && props.renderBody ? (props.bodyData.map((item, index) => props.renderBody(item, index))) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table