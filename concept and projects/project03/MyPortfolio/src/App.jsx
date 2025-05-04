import React from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'


function App() {

  return (
    <>
      <div id='app-outer'>
        <Navbar/>
        <Home/>
        <About/>
      </div>
    </>
  )
}

export default App
