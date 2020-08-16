import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import am from './../../images/am.png'
import ru from './../../images/ru.jpg'
import us from './../../images/us.png'
import SearchBox from './SearchBox'

const languages = [am, ru, us];

export default function Iconbar() {
    const [lang, setLang] = useState(false);
    const selectedLang = [];

    const changeLang = (ind) => {
        setLang(false);
        selectedLang.unshift(languages[ind]);
        languages.splice(ind, 1);
        languages.unshift(selectedLang[0]);
    }

    return (
        <div className='icon-bar'>
            <SearchBox />
            <div className='languages'>
                <div style={lang ? {height: '7.5vw'} : {height: '2.5vw'}}>
                    {
                        languages.map((lang, index) => 
                                <button type='button' className='btn' key={index} onClick={() => changeLang(index)} >
                                    <img src={lang} alt='flag' />
                                </button>     
                        )
                    }
                </div>
                <button type='button' className='btn btn-lang' onClick={lang ? () => setLang(false) : () => setLang(true)} >
                    <FaAngleDown style={lang ? {transform: 'rotate(-180deg) '} : {transform: 'rotate(0deg) '}} />
                </button>
            </div>
            <button type='button' className='btn-log'>
                Մուտք
            </button>
        </div>
    )
}
