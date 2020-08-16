import React from 'react'
import o from './../../images/circle.png'
import y from './../../images/triangle.png'
import x from './../../images/x.png'

const icons = [o, x, y, o, x, y, o, x, y, o, x, y];

export default function MainBg() {
    return (
        <div className='main-bg'>
            {
                icons.map((icon, index) =>
                    <img
                        src={icon}
                        key={index}
                        alt='icon'
                        style={
                            {
                                top: Math.floor(100) * Math.random(100) + '%',
                                left: Math.floor(100) * Math.random(100) + '%'
                            }
                        }
                    />
                )
            }
        </div>
    )
}
