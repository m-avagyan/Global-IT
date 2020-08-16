import React from 'react'
import logo from './../../images/logo.png'
import logoText from './../../images/logo_text.png'

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='Logo' />
            <img src={logoText} alt='Global IT' />
        </div>
    )
}
