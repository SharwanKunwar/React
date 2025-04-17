
import './App.css'
import Navbar from './components/Header/Navbar'
import Fotter from './components/Fotter/Fotter'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Fotter/>
    </>
  )
}

export default App
