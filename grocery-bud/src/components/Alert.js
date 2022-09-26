import React from 'react'

const Alert = ({ message }) => {
    return (
        <p className="alert alert-danger">{message}</p>
    )
}

export default Alert