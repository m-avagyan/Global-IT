import React from 'react'
import FooterBar from './FooterBar'
import FooterRow from './FooterRow'
import FooterMain from './FooterMain'

export default function Footer() {
    return (
        <div className='footer-container'>
            <FooterBar />
            <FooterRow />
            <FooterMain />
        </div>
    )
}
