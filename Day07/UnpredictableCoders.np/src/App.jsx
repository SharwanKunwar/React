

import './App.css'
import Navbar from './Components/Header/Navbar'
import Fotter from './Components/Fotter/Fotter'
import { Outlet } from 'react-router'

function App() {
  

  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  )
}

export default App
