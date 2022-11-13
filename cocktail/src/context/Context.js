import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

const myContext = createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('a')
    const [cocktails, setCocktails] = useState([])

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchText}`)
            const data = await response.json()
            const { drinks } = data

            if (drinks) {
                const newCocktails = drinks.map(item => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
            // console.log(drinks)
            setLoading(false)
        }
        catch (error) {
            // throw error
            console.log(error)
            setLoading(false)
        }
    }, [searchText])

    useEffect(() => {
        fetchData()
        // ! i have to add searchText to the dependencies if something happens
    }, [fetchData])


    return (
        <myContext.Provider value={{ loading, cocktails, setSearchText }}>
            {children}
        </myContext.Provider>
    )
}

export const useGlobalContext = () => useContext(myContext)

export default ContextProvider