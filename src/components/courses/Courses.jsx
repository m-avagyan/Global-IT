import React, {useState} from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Course from './Course'
import front from './../../images/front.png'
import back from './../../images/back.png'

const courses = [
    {
        name: 'Front-end',
        photo: front
    },
    {
        name: 'Back-end',
        photo: back
    },
    {
        name: 'Android',
        photo: front
    },
    {
        name: 'Game',
        photo: back
    }
]

export default function Courses() {
    const [show, setShow] = useState(2)

    const setMoreCourses = () => {
        show === 2 ? setShow(courses.length) : setShow(2)
    }

    return (
        <div className='courses-container'>
            <h2>Դասընթացներ</h2>
            <div className='courses'>
                {
                    courses.map((course, index) => 
                        index + 1 <= show &&
                        <Course course={course} key={index} />
                    )
                }
            </div>
            <button
                type='button'
                className='btn btn-course'
                onClick={() => setMoreCourses()}
                style={show !== 2 ? {transform: 'rotate(-180deg)'} : {transform: 'rotate(0deg)'}}
            >
                <FaAngleDown />
            </button>
        </div>
    )
}
