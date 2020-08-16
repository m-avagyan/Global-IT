import React from 'react'
import { FaUsers, FaUser, FaCalendarCheck, FaStar } from 'react-icons/fa'

export default function Course({course}) {
    return (
        <div className='course'>
            <div className='img-box'>
                <img src={course.photo} alt='Course' />
            </div>
            <h4>{course.name}</h4>
            <div className='text-box'>
                <div className='text-col'>
                    <h3>ծրագրավորում</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Semper lorem massa nunc enim. Vitae amet est vestibulum sagittis. 
                        Velit tortor quis et dolor venenatis nibh dictum tincidunt. 
                        Turpis nisi velit varius tortor nunc eu.
                    </p>
                </div>
                <div className='text-col2'>
                    <div>
                        <FaUsers />
                        <span>3-5 անձ</span>
                    </div>
                    <div>
                        <FaUser />
                        <span>1-2 անձ</span>
                    </div>
                    <div>
                        <FaCalendarCheck />
                        <span>4-6 ամիս</span>
                    </div>
                    <div className='text-stars'>
                        <button type='button' className='btn'><FaStar /></button>
                        <button type='button' className='btn'><FaStar /></button>
                        <button type='button' className='btn'><FaStar /></button>
                        <button type='button' className='btn'><FaStar /></button>
                        <button type='button' className='btn'><FaStar /></button>
                    </div>
                </div>
            </div>
            <div className='course-btns'>
                <button type='button' className='btn'>
                    Դիմել
                </button>
                <button type='button' className='btn'>
                    Ուս․ ծրագիր
                </button>
            </div>
        </div>
    )
}
