/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider ({ children }) {
    const [productList, setProductList] = useState([]);
    const [finalTotal, setFinalTotal] = useState(0);

    return(
        <Context.Provider value={{productList, finalTotal, setProductList, setFinalTotal}}>
            {children}
        </Context.Provider>
            
    )
}