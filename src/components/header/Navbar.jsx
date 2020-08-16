import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const links = [
        'Վեբ կայքերի պատրաստում',
        'Հեռախոսային հավելվածներ',
        'Դեսքթոփ հավելվածներ',
        'Համակարգչային և հեռախոսային խաղեր',
        'Վեբ և գրաֆիկ դիզայն ՍԵՈ և ՍՄՄ առաջխաղացում',
        'Բիզնես կառավարում և մարքեթինգ',
        'Հաշվապահական հաշվառում և Հարկային օրենսդրություն'
]

export default function Navbar() {
    return (
        <div className='navbar'>
            <span>Գլխավոր</span>
            <span className='dropdown'>
                Ծառայություններ <FaAngleDown />
                <div className='drop'>
                    {
                        links.map((lnk, index) =>
                            <p key={index} >{lnk}</p>
                        )
                    }
                </div>
            </span>
            <span>Ֆակուլտետներ</span>
            <span>Աշխատանք</span>
            <span>Թեստեր</span>
            <span>Կապ</span>
        </div>
    )
}
