import React, { useState } from 'react'
import profile from '../utilis/data.js';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    const [index, setIndex] = useState(0)
    const { name, image, job, info } = profile[index]

    let checkNumber = (index) => {
        if (index < 0) {
            index = profile.length - 1
            return index
        }
        if (index > profile.length - 1) {
            index = 0
            return index
        }
        return index
    }

    const prevProfile = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }
    const nextProfile = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const randomizer = () => {
        let newIndex = Math.floor(Math.random() * profile.length)
        setIndex(newIndex)
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{info}</p>
            <div className='button-container'>
                <button className="prev-btn" onClick={prevProfile}><FaChevronLeft /></button>

                <button className="next-btn" onClick={nextProfile}> <FaChevronRight /></button>
            </div>
            <button className="random-btn" onClick={randomizer}>surprise me</button>

        </article>
    )
}

export default Reviews