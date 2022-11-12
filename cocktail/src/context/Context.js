import React, { createContext, useContext, useEffect, useState } from 'react'

const myContext = createContext()

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    return (
        <myContext.Provider value={{ loading }}>
            {children}
        </myContext.Provider>
    )
}

export const useGlobalContext = () => useContext(myContext)

export default ContextProvider