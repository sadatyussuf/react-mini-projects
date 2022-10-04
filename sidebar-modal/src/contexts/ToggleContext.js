import { createContext, useState, useContext } from 'react'

import React from 'react'

export const ButtonsContext = createContext()

const ButtonsContextProvider = (props) => {
    const [modalState, setModalState] = useState(false)
    const [menuState, setMenuState] = useState(false)

    const openModal = () => {
        setModalState(true)
    }
    const closeModal = () => {
        setModalState(false)
    }

    const openMenu = () => {
        setMenuState(true)
    }
    const closeMenu = () => {
        setMenuState(false)
    }

    return (
        <ButtonsContext.Provider value={{ modalState, openModal, closeModal, menuState, openMenu, closeMenu }}>
            {props.children}
        </ButtonsContext.Provider>
    )
}
export const useToggleBtns = () => useContext(ButtonsContext)

export default ButtonsContextProvider