import React from 'react'

export default function Slide({slide, index}) {
    return (
        <div
            className={
                index === 1 || index === 4 || index === 7 ? 'slide slide2' : index === 2 || index === 5 || index === 8 ? 'slide slide3' : 'slide'
            }
        >
            <img src={slide.photo} alt={slide.title} />
            <div>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
            </div>
        </div>
    )
}
