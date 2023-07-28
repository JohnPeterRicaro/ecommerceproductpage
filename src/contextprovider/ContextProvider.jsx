import { createContext, useContext, useState } from "react";

const StateContext = createContext()

export const ContextProvider = ({children}) => {
    const initialState = {
        cart: false,
    }

    const [ sum, setSum ] = useState()
    const [ prodTotal, setProdTotal ] = useState()
    const [ isActive, setIsActive ] = useState()
    const [ isArrKey, setIsArrKey ] = useState(0)
    const [ mArrKey, setMArrKey] = useState(0)
    const [ wArrKey, setWArrKey ] = useState(0)
    const [ isRoute, setIsRoute ] = useState("/")
    const [ isClicked, setIsClicked ] = useState(initialState)

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked] : true})
    }

    return (
        <StateContext.Provider value={{sum, setSum, isActive, setIsActive, prodTotal, isArrKey, setIsArrKey, mArrKey, setMArrKey, wArrKey, setWArrKey, setProdTotal, isRoute, setIsRoute, isClicked, setIsClicked}}>
            {children}
        </StateContext.Provider>
    )
    
}

export const useStateContext = () => useContext(StateContext)