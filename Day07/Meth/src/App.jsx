
import './App.css'
import Navbar from './components/Header/Navbar'
import { Outlet } from 'react-router'


function App() {
  
  return (
    <>
      <div id='main-outer'>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
