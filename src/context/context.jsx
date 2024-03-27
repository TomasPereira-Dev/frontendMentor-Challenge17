/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider ({ children }) {
    const [productList, setProductList] = useState([]);

    return(
        <Context.Provider value={{productList, setProductList}}>
            {children}
        </Context.Provider>
            
    )
}