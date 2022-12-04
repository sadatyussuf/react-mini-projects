import React from 'react'
import logo from '../images/illustration-thank-you.svg'

const Back = ({ curValue }) => {
    return (
        <div className='back-container'>
            <div className="svg-img">
                <img src={logo} alt="thank you" />
            </div>
            <div className="rating">
                <p>You selected {curValue} out of 5</p>
            </div>
            <div className="thanks">
                <h1>thank you!</h1>
            </div>
            <div className="info">
                <p> We appreciate you taking the time to give a rating. If you ever need more support,
                    don't hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}

export default Back