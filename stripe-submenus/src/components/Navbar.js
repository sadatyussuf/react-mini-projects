import React from 'react'
import { links } from '../utilis/data'
import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="nav-logo" />
                    <button className="btn toggle-btn">
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <button className="link-btn">
                                        {link}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="btn signin-btn">
                    Sign in
                </button>
            </div>
        </nav>
    )
}

export default Navbar