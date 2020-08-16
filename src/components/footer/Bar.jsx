import React from 'react'

export default function Bar({title, bars}) {
    return (
        <div className='bar'>
            <h3>{title}</h3>
            <ul>
                {
                    bars.map((bar, index) =>
                        <li key={index}>{bar}</li>
                    )
                }
            </ul>
        </div>
    )
}
