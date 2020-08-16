import React from 'react'
import fac1 from './../../images/fac1.svg'
import fac2 from './../../images/fac2.svg'
import fac3 from './../../images/fac3.svg'
import fac1icon from './../../images/fac1icon.svg'
import fac2icon from './../../images/fac2icon.svg'
import fac3icon from './../../images/fac3icon.svg'
import Fac from './Fac'

const facults = [
    {title: 'Վեբ ծրագրավորման', photo: fac1, icon: fac1icon},
    {title: 'Ծրագրավորման', photo: fac2, icon: fac2icon},
    {title: 'Մուլտիմեդիայի', photo: fac3, icon: fac3icon}
]

export default function Facults() {
    return (
        <div className='facults'>
            <h2>Ֆակուլտետներ</h2>
            <div className='facults-container'>
                {
                    facults.map((facult, index) =>
                        <Fac key={index} facult={facult} />
                    )
                }
            </div>
        </div>
    )
}
