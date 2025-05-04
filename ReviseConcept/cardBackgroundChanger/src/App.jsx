import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardPage from './components/CardBox/CardPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-gray-400 w-screen h-screen flex justify-center items-center'>
      <CardPage/>
     </div>
    </>
  )
}

export default App
