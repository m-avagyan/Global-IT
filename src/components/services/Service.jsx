import React from 'react'

export default function Service({info}) {
    return (
        <div className='service'>
            <div>
                <h3>{info.title}</h3>
                <button type='button' className='btn'>
                    Պատվիրել
                </button>
            </div>
            <img src={info.photo} alt='service' />
        </div>
    )
}
