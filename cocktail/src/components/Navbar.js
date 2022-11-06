import React from 'react'
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <a href="/">
                    <img src={logo} alt="logo" className='logo' />
                </a>

                <ul className="nav-links">
                    <li><a href="/">
                        home</a></li>
                    <li><a href="/about">about</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar