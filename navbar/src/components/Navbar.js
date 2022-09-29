import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'

import logo from '../logo.svg'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt='logo' className='logo' />
                    <button className='nav-toggle'>
                        {/*! add dynamic toggle  */}
                    </button>

                </div>
                <div className='links-container'></div>
            </div>
        </nav>
    )
}

export default Navbar;