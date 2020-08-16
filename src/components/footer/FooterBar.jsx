import React from 'react'
import FooterText from './FooterText'
import Bar from './Bar'
import ContactBar from './ContactBar'

const bars = [
    [
        'Վեբ ծրագրավորում',
        'Ծրագրավորում',       
        'Մուլտիմեդիա',       
        'Նախագծեր',       
        'Անվճար դասընթացներ',       
        'Այլ Դասընթացներ',       
        'Անվճար Դպրոց 1-4 դասարան',      
        'Անվճար Դպրոց 5-9 դասարան'
    ],
    [
        'Դասընթացներ',
        'Մեր մասին',
        'Վեբ կայքերի պատրաստում',
        'Հեռախոսային և Դեսքթոփ հավելվածներ'
    ]
]

export default function FooterBar() {
    return (
        <div className='footer-bar'>
            <FooterText />
            <Bar title='Դասընթացներ' bars={bars[0]} />
            <Bar title='Կայքի Քարտեզ' bars={bars[1]} />
            <ContactBar />
        </div>
    )
}
