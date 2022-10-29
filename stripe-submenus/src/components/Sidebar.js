import { sublinks } from '../utilis/data'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useContextProvider } from '../context/MenuContext'

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useContextProvider()

    return (
        <div className={` ${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <aside className="sidebar">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {
                        sublinks.map((sublink, index) => {
                            const { page, links } = sublink
                            return (
                                <article key={index}>
                                    <h4>{page}</h4>
                                    <div className="sidebar-sublinks">
                                        {
                                            links.map((link, index) => {
                                                const { label, icon, url } = link
                                                return (
                                                    <a href={url} key={index}>
                                                        {icon}
                                                        {label}
                                                    </a>
                                                )

                                            })
                                        }
                                    </div>
                                </article>


                            )
                        })
                    }
                </div>
            </aside>
        </div>
    )
}

export default Sidebar