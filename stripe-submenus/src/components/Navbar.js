import React from 'react'
import { links } from '../utilis/data'
import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useContextProvider } from '../context/MenuContext'


const Navbar = () => {
    const { handleMouseEnter, refNavElement, openSidebar, handleMouseExit } = useContextProvider()

    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="nav-logo" />
                    <button className="btn toggle-btn" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    {
                        links.map((link, index) => {
                            return (

                                <li ref={link => refNavElement.current.push(link)} key={index}
                                    onMouseOver={() => handleMouseEnter(link, index)}
                                    onMouseOut={() => handleMouseExit()}>

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