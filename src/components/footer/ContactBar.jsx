import React from 'react'

const bars = [
    'Մշակույթի տուն',
    '+374 55 560 590',
    '+374 95 355 255',
    '+374 94 806 714',
    '+374 41 806 714',
    '+374 43 960 950',
    '+374 98 960 950',
    'gitedu@bk.ru',
    'globalit@gitedu.am'
]

export default function ContactBar() {
    return (
        <div className='bar'>
            <h3>Հետադարձ Կապ</h3>
            <ul>
                <li>ք. Երևան Պ. Սևակ 15/1</li>
                <li>ք. Աբովյան գ. Արամուս </li>
                <li>
                    {
                        bars.map((bar, index) =>
                            <span key={index}>{bar}</span>
                        )
                    }
                </li>
            </ul>
        </div>
    )
}
