import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Iconbar from './Iconbar'

export default function Header() {
    return (
        <div className='header'>
            <Logo />
            <div className='menu'>
                <Navbar />
                <Iconbar />
            </div>
        </div>
    )
}
