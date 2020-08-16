import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

export default function AsideContent() {
    return (
        <div className='aside-content'>
            <div className='call-btn'>
                <button type='button' className='btn'>
                    <FaPhoneAlt />
                </button>
                <span>Պատվիրել զանգ</span>
            </div>
            <h2> Ստացիր թվային աշխարհի բոլոր հնարավորությունները GLOBAL IT-ի հետ միասին․ </h2>
            <div className='btn-group'>
                <button type='button' className='btn'>
                    Մեր մասին
                </button>
                <button type='button' className='btn'>
                    Ստանալ կրթություն
                </button>
            </div>
        </div>
    )
}
