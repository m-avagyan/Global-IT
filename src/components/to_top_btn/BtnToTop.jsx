import React, {useState} from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BtnToTop() {
    const [btn, setBtn] = useState(false);

    window.onscroll = () => btnDisplay();

    const btnDisplay = () => {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setBtn(true)
        }else {
            setBtn(false)
        }
    };

    const scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <button type='button' className='btn btn-to-top' style={btn ? {right: '2vw'} : {right: '-6vw'}} onClick={() => scrollTop()}>
            <FaArrowUp />
        </button>
    )
}