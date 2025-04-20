import { createContext, useContext } from "react";

export const ThemContext = createContext({
    themeMode: "light",
    lightTheme: ()=>{},
    darkTheme: ()=>{},
})

export const ThemeProvider = ThemContext.Provider;

export default function useTheme(){
    return useContext(ThemContext);
}



