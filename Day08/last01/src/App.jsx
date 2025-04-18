import { useState } from 'react'
import './App.css'
import Login03 from './components/Login/Login03'
import Profile03 from './components/Profile/Profile03'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <Login03/>
      <Profile03/>
    </UserContextProvider>
  )
}

export default App
