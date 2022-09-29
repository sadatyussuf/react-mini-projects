import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'

import { links, socials } from '../utilis/data'
import logo from '../logo.svg'

const Navbar = () => {
    const [toggleState, setToggleState] = useState(false)
    const refToggle = useRef(null)

    const handleToggle = () => {
        setToggleState(!toggleState)
        // console.log(refToggle.current)
    }

    useEffect(() => {
        const linksContainer = refToggle.current
        if (toggleState) {
            linksContainer.style.height = '200px'
        } else {
            linksContainer.style.height = '0px'

        }
    }, [toggleState])

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt='logo' className='logo' />
                    <button className='nav-toggle' onClick={handleToggle}>
                        <FaBars />
                    </button>

                </div>
                <div className='links-container' ref={refToggle}>
                    <ul className="links">
                        {
                            links.map((link) => {
                                return (
                                    <li key={link.id}>
                                        <a href={link.url}>{link.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className='social-icons'>
                    {
                        socials.map((social) => {
                            return (
                                <li key={social.id}>
                                    <a href={social.url}>
                                        {social.icon}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;