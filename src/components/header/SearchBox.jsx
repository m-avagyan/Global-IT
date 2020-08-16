import React, { useState, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBox() {
    const [searchBox, setSearchBox] = useState(false)
    const inp = useRef(null)

    const openBox = () => {
        setSearchBox(true);
        inp.current.focus()
    }

    return (
        <div className='search'>
            <button
                type='button'
                className='btn'
                style={searchBox ? {display: 'none'} : {display: 'inline'}}
                onClick={() => openBox()}
            >
                <FaSearch />
            </button>
            <form
                onSubmit={(e) => e.preventDefault()}
                style={
                    searchBox ?
                    {width: '23.3vw'} :
                    {width: '0vw'}
                }
            >
                <button type='submit' className='btn' >
                    <FaSearch />
                </button>
                <input type='search' placeholder='Փնտրել' onBlur={() => setSearchBox(false)} ref={inp} />
            </form>
        </div>
    )
}
