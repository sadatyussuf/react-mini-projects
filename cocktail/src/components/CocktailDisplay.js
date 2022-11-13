import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from "../context/Context"
const CocktailDisplay = () => {
    const { loading } = useGlobalContext()
    //   console.log(loading)
    if (loading) {
        return <Loading />
    }
    return (
        <p>hi</p>
    )
}

export default CocktailDisplay