/* eslint-disable react/prop-types */
import { createContext } from "react";

export const Context = createContext();

export function ContextProvider ({ children }) {
    return(
        <Context.Provider value={{
            sampletext: "",
            min: 0
        }}>
            {children}
        </Context.Provider>
            
    )
}