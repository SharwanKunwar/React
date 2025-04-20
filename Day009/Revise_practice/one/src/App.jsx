import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {

  const [themeMode, setThemeMode] = useState("green");
  const lightTheme = ()=>{
    setThemeMode("gray");
  }
  const darkTheme = ()=>{
    setThemeMode("black");
  }

  //acutal change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("gray", "black");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
     <h1>Context practice</h1>
     <ThemeBtn/>
     <Card/>
    </ThemeProvider>
  )
}

export default App
