import React from 'react'
import { data } from '../utilis/data'
import Footer from './Footer'

const Product = () => {
    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {
                    data.map((item) => {
                        const { id, title, price, img, amount } = item
                        return (
                            <article key={id} className="cart-item">
                                <img src={img} alt={title} />
                                <div>
                                    <h4>{title}</h4>
                                    <h4 className="item-price">
                                        ${price}
                                    </h4>
                                    <button className="remove-btn">
                                        remove
                                    </button>
                                </div>
                                <div>
                                    <button className="amount-btn">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                                            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                                        </svg>
                                    </button>
                                    <p className="amount">
                                        {amount}
                                    </p>
                                    <button className="amount-btn">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                        </svg>
                                    </button>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            <Footer />
        </section>
    )
}

export default Product