import React from 'react'
import desktopImage from '../images/image-product-desktop.jpg'
import mobileImage from '../images/image-product-mobile.jpg'
import cart from '../images/icon-cart.svg'

const Cards = () => {
    return (
        <main className="container">
            <div className="card-container">
                <div className="card-image">
                    <img src={desktopImage} alt="desktopImage" className='desktopImage' />
                    <img src={mobileImage} alt="desktopImage" className='mobileImage' />
                </div>
                <div className="card-info">
                    <div className="card-info-details">

                        <h3>perfume</h3>
                        <h1>Gabrielle Essence Eau De Parfum</h1>
                        <p> A floral, solar and voluptuous interpretation composed by Olivier Polge,
                            Perfumer-Creator for the House of CHANEL.
                        </p>
                        <div className="price">
                            <div className='active-price'>$149.99</div>
                            <div className='previous-price'>$169.99</div>
                        </div>
                        <button> <img src={cart} alt="cart logo" /> <span>Add to Cart</span> </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cards