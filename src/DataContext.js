import React, { createContext, useReducer } from 'react'
import { dataReducer, initialState } from './Readucer'

export const DataContext = createContext()
export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState)


    const handleDropedown = (item) => {
        console.log(item);
    }
    return (
        <div>
            <DataContext.Provider value={{ handleDropedown, state, dispatch }}>{children}</DataContext.Provider>
        </div>
    )
}
