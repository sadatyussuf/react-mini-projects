import React from 'react'
import { useMyContextProvider } from '../context/MyContext'
const Footer = () => {
    const { dispatch, state } = useMyContextProvider()
    return (
        <footer>
            <hr />
            <div className="cart-total">
                <h4>total
                    <span>${state.total}</span>
                </h4>
            </div>
            <button className="btn clear-btn" onClick={() => dispatch({ 'type': 'CLEAR_ALL' })}>
                clear cart
            </button>
        </footer>
    )
}

export default Footer