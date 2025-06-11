import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import CardInput from './Components/CardInput'
import CardOutput from './Components/CardOutput'

function App() {
  

  return (
    <UserContextProvider>
      <div className='flex gap-10'>
        <CardInput/>
      <CardOutput/>
      </div>
    </UserContextProvider>
  )
}

export default App
