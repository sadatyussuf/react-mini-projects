import React from 'react'
import { useState, useEffect } from 'react'

import data from '../utilis/data'


import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';





const Review = () => {
    const [people, setPeople] = useState(data)
    const [value, setValue] = useState(0)



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

    const getIndex = (value) => {
        let index = value - 1
        return index
    }

    const checkSlideState = (id, value) => {
        let isState = 'nextSlide'
        let data_length = people.length - 1
        let prevValue = 0
        id = getIndex(id)

        const checkValue = () => {
            if (value === 0) {
                prevValue = data_length
                return prevValue
            } else {
                prevValue = value - 1
                return prevValue
            }
        }
        prevValue = checkValue()

        if (value === id) {
            isState = 'activeSlide'
            return isState
        }
        else if (id === prevValue) {
            isState = 'leftSlide'
            return isState
        }
        else {
            return isState
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
            {
                people.map((person) => {
                    const { id, image, name, quote, title } = person

                    return (
                        // <article key={id} className={`${getIndex(id) > value && 'nextSlide'} ${getIndex(id) < keepIndexInBound(value) && 'nextSlide'} ${getIndex(id) === value && 'activeSlide'}`
                        <article key={id} className={` ${checkSlideState(id, value)}`
                        }>
                            <img src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    )
                })
            }
        </div>
    )
}

export default Review