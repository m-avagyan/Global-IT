import React from 'react'
import sale from './../../images/sale.svg'
import online from './../../images/online.png'
import offline from './../../images/offline.png'

export default function Fac({ facult }) {
    return (
        <div className='fac'>
            <div className='fac-top'>
                <img src={facult.icon} alt='icon' className='fac-icon' />
                <img src={sale} alt='sale' className='fac-sale' />
                <h3>{facult.title}</h3>
                <h4>Ֆակուլտետ</h4>
                <img src={facult.photo} alt='facult' className='fac-img' />
            </div>
            <div className='fac-info'>
                <p>
                    <span>Դասերի քանակը</span>
                    <span>20</span>
                </p>
                <p>
                    <span>Ուսանողների քանակը</span>
                    <span>50</span>
                </p>
                <p>
                    <span>Մասնագիտություններ</span>
                    <span>12</span>
                </p>
                <div>
                    <span>
                        <img src={online} alt='online' />
                        Online
                    </span>
                    <span>
                        <img src={offline} alt='offline' />
                        Offline
                    </span>
                </div>
            </div>
            <button type='button' className='btn'>
                Իմանալ ավելին
            </button>
        </div>
    )
}
