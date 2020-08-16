import React, {useState} from 'react'

export default function Friend({photo, photoH}) {
    const [image, setImage] = useState(false)
    return (
        <div className='friend' onMouseOver={() => setImage(true)} onMouseOut={() => setImage(false)} >
            <img src={image ? photoH : photo} alt='companie' />
        </div>
    )
}
