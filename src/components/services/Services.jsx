import React from 'react'
import web from './../../images/web.svg'
import mobile from './../../images/mobile.svg'
import comp from './../../images/comp.svg'
import game from './../../images/game.svg'
import design from './../../images/design.svg'
import seo from './../../images/seo.svg'
import Service from './Service'

const services = [
    {title: 'Վեբ Կայքերի պատրաստում', photo: web},
    {title: 'Բջջային հավելվածներ', photo: mobile},
    {title: 'Համակարգչային հավելվածներ', photo: comp},
    {title: 'Բջջային և համ․ խաղեր', photo: game},
    {title: 'Վեբ և գրաֆիկ դիզայն', photo: design},
    {title: 'ՍԵՕ և ՍՄՄ առաջխաղացում', photo: seo}
]

export default function Services() {
    return (
        <div className='services'>
            <h2>Ծառայություններ</h2>
            <div className='services-container'>
                {
                    services.map((service, index) =>
                        <Service key={index} info={service} />
                    )
                }
            </div>
        </div>
    )
}
