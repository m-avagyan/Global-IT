import React from 'react'
import AsideImg from './AsideImg'
import AsideContent from './AsideContent'

export default function Aside() {
    return (
        <div className='aside'>
            <AsideContent />
            <AsideImg/>
        </div>
    )
}
