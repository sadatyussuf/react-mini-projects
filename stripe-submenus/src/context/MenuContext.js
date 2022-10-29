import { sublinks } from '../utilis/data'

import { createContext, useContext, useState, useRef } from 'react'

const context = createContext()

// filterData function to check which sublink we are hovering on.
const filterData = (cur_name) => {
    const result = sublinks.filter((sublink) => sublink.page === cur_name)
    return result
}

const ContextProvider = (props) => {

    const [currentLinkIndex, setCurrentLinkIndex] = useState('')
    const [currentSubLink, setCurrentSubLink] = useState([])
    const [elementPosition, setElementPosition] = useState({ 'center': 0, 'columnNum': 0 })
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

    const refNavElement = useRef([])

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }


    const handleMouseEnter = (cur_name, index) => {
        setIsSubmenuOpen(true)
        const result = filterData(cur_name)
        setCurrentSubLink(result)
        setCurrentLinkIndex(index)

        calculate(index, result)

    }

    const handleMouseExit = () => {
        setIsSubmenuOpen(false)
    }


    // * i'll change it i the future 
    function calculate(index, result) {
        const curRefElement = refNavElement.current[index]
        const lengthOfLink = result[0]['links'].length
        const { left, right } = curRefElement.getBoundingClientRect()
        const center = (left + right) / 2
        setElementPosition({ ...elementPosition, 'center': center, 'columnNum': lengthOfLink })
    }


    return (
        <context.Provider value={{
            handleMouseEnter, currentSubLink,
            refNavElement, elementPosition,
            isSidebarOpen, openSidebar,
            closeSidebar, isSubmenuOpen,
            handleMouseExit
        }}>
            {props.children}
        </context.Provider>
    )
}

export const useContextProvider = () => useContext(context)

export default ContextProvider