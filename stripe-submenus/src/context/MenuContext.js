import { sublinks } from '../utilis/data'

import { createContext, useContext, useState, useRef, useEffect } from 'react'

const context = createContext()

const filterData = (cur_name) => {
    const result = sublinks.filter((sublink) => sublink.page === cur_name)
    return result
}

const ContextProvider = (props) => {
    const refNavElement = useRef(null)
    const [currentSubLink, setCurrentSubLink] = useState([])

    const handleMouseEnter = (e, cur_name) => {
        console.log(e.target)
        const result = filterData(cur_name)
        setCurrentSubLink(result)

    }
    // const handleMouseLeave = e => {
    //     e.target.style.background = "maroon"

    useEffect(() => {
        console.log(refNavElement.current)
        // console.log(refNavElement.current.getBoundingClientRect())
        console.log('hi')
    }, [currentSubLink])

    return (
        <context.Provider value={{ handleMouseEnter, currentSubLink, refNavElement }}>
            {props.children}
        </context.Provider>
    )
}

export const useContextProvider = () => useContext(context)

export default ContextProvider