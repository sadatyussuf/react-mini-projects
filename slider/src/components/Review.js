import React from 'react'
import { useState, useEffect } from 'react'

import data from '../utilis/data'


import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


const Review = () => {
    const [people, setPeople] = useState(data)
    const [value, setValue] = useState(0)

    const { image, name, quote, title } = people[value]

    const increamentOrDecreament = (choice) => {
        if (choice === 'next') {
            let data_length = people.length - 1
            let changeValue = value + 1

            if (changeValue > data_length) {
                setValue(0)
            }
            else {
                setValue(changeValue)
            }
        }
        else {
            let changeValue = value - 1

            if (changeValue < 0) {
                setValue(people.length - 1)
            }
            else {
                setValue(changeValue)
            }
        }
    }

    const prevHandler = () => {
        increamentOrDecreament('prev')
    }

    const nextHandler = () => {
        increamentOrDecreament('next')
    }


    useEffect(() => {
        const timer = setInterval(() => {
            // setValue(value + 1)
            increamentOrDecreament('next')
        }, 6000)

        // clearing interval
        return () => clearInterval(timer)
    })

    return (
        <div className="section-center">
            <article className="activeSlide">
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
            </article>
            <button className="prev" onClick={prevHandler}>
                <FiChevronLeft />
            </button>
            <button className="next" onClick={nextHandler}>
                <FiChevronRight />
            </button>
        </div>
    )
}

export default Review