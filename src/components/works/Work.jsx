import React from 'react'

export default function Work({photo}) {
    return (
        <div className='work'>
            <img src={photo} alt='companie' />
            <button type='button' className='btn'>
                Տեսնել կայքը
            </button>
        </div>
    )
}
