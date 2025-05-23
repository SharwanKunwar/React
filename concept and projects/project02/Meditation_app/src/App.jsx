import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/Navbar'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app-outer'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
