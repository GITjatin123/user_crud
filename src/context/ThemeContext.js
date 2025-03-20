"use client";
import { createContext } from "react";
export const ThemeContext = createContext();
export  function Theme({children}){
    return <ThemeContext.Provider value={{themeName:'admin'}}>
        {children}
    </ThemeContext.Provider>
}
