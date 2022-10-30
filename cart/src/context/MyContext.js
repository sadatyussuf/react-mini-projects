import { createContext, useState, useContext, useReducer } from "react";
// import { data } from "../utilis/data";
import { reducer, initialState } from "../reducer/myReducer";


const appContext = createContext()


const MyContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)




    return (
        <appContext.Provider value={{ isLoading, dispatch, state }}>
            {props.children}
        </appContext.Provider>
    )
}
export const useMyContextProvider = () => useContext(appContext)

export default MyContextProvider