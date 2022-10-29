import React from 'react'

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="cart-total">
                <h4>total
                    <span>$ 00000.00</span>
                </h4>
            </div>
            <button className="btn clear-btn">
                clear cart
            </button>
        </footer>
    )
}

export default Footer