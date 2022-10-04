import React from 'react'
import { FaTimes } from 'react-icons/fa'

import { socials, links } from '../utilis/data'
import logo from '../logo.svg'
import { useToggleBtns } from '../contexts/ToggleContext'


const Sidebar = () => {
    const { menuState, closeMenu } = useToggleBtns()
    return (
        <aside className={`sidebar ${menuState && "show-sidebar"}`}>
            <div className="sidebar-header">
                <img src={logo} alt="coding addict" className="logo" />

                <button className="close-btn" onClick={() => closeMenu()}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {
                    links.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.url}>
                                    {link.icon}
                                    {link.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="social-icons">
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
        </aside>
    )
}

export default Sidebar