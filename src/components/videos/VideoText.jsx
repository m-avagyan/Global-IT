import React from 'react'
import videoText from './../../images/video_text.svg'

export default function VideoText() {
    return (
        <div className='video-text'>
            <h1>Ուզում եք միանալ մեր թիմին բայց ունեք հարցե՞ր</h1>
            <p>Դիտելով այս հոլովակը դուք կստանաք ձեր բոլոր հարցերի պատասխանները</p>
            <img src={videoText} alt='video text' />
        </div>
    )
}
