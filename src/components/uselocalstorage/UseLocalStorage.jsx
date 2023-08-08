import { useState, useEffect } from "react";

const getStorageValue = ({key, defaultValue}) => {
    if(typeof window !== "undefined") {
        const saved = localStorage.getItem(key)
        const initial = saved ? JSON.parse(saved) : defaultValue

        if(Array.isArray(initial)){
            const parsedData = initial.map(data => ({
                ...data
            }))

            return parsedData
        }
        return initial
    }
    return defaultValue
}

export const useLocalStorage = ({key, defaultValue}) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}