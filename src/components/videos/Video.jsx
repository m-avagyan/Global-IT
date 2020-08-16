import React from 'react'
import videoTri from './../../images/video_tri.png'

export default function Video() {
    return (
        <div className='video'>
            <div className='video-circle1'>
                <div className='video-circle2'></div>
            </div>
            <button type='button' className='btn'>
                <img src={videoTri} alt='triangle' />
            </button>
        </div>
    )
}
