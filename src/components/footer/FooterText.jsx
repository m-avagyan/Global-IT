import React from 'react'
import logo from './../../images/logo.png'
import logoText from './../../images/logo_text.png'

export default function FooterText() {
    return (
        <div className='footer-text'>
            <div>
                <img src={logo} alt='logo' />
                <img src={logoText} alt='Global IT' />
            </div>
            <p>
                ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: 
                Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, 
                որոնց նպատակն է մեծացնել Ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: 
                Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, 
                որոնք նպաստում են Ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
            </p>
        </div>
    )
}
