import React from 'react'
import star from '../images/icon-star.svg'

const Front = ({ handleSubmit, setCurValue }) => {

    function handleClick(e) {
        // console.log(e.target.innerHTML)
        let curValue = e.target.innerHTML
        // return curValue
        setCurValue(curValue)
    }
    return (
        <div className='front-container'>
            <div className='star'>
                <span>
                    <img src={star} alt="star" />
                </span>
            </div>
            <div className='title'>
                <h1>How did we do?</h1>
            </div>
            <div className='paragraph'>
                <p>
                    Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
            </div>
            <div className='numbers' onClick={handleClick}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </div>
            {/* () => handleSubmit(handleClick) */}
            <button type='submit' className='submit-btn' onClick={handleSubmit}>submit</button>

        </div>
    )
}

export default Front