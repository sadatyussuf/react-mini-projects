import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useToggleBtns } from '../contexts/ToggleContext'
const Home = () => {
    const { openModal, openMenu } = useToggleBtns()


    return (
        <main>
            <button className="sidebar-toggle" onClick={() => openMenu()}>
                <FaBars />
            </button>

            <button className="btn" onClick={() => openModal()}> show modal </button>

        </main>
    )
}

export default Home