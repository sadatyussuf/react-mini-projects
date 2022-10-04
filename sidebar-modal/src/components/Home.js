import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useToggleBtns } from '../contexts/ToggleModalContext'
const Home = () => {
    const { modalState, openModal } = useToggleBtns()

    console.log(modalState)
    return (
        <main>
            <button className="sidebar-toggle">
                <FaBars />
            </button>

            <button className="btn" onClick={() => openModal()}> show modal </button>

        </main>
    )
}

export default Home