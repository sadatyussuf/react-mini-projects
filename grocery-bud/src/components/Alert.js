import React from 'react'

const Alert = ({ message, alertClass }) => {
    return (
        <p className={`alert ${alertClass}`}>{message}</p>
    )
}

export default Alert