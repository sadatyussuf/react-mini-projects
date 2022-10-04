import React from 'react'
import { FaTimes } from 'react-icons/fa'

import { useToggleBtns } from '../contexts/ToggleContext'



const Modal = () => {
    const { closeModal, modalState } = useToggleBtns()
    return (
        <div className={`modal-overlay ${modalState && 'show-modal'}`}>
            <div className="modal-container">
                <h3>modal content</h3>
                <button className="close-modal-btn" onClick={() => closeModal()}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default Modal