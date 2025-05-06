import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col gap-10 bg-blue-400/30 backdrop-blur-md p-10 rounded-2xl shadow-2xl">
    <h3 className="font-sans text-6xl">My name is sharwan jung kunwar.</h3>
    <h4 className="font-serif text-4xl">My name is sharwan jung kunwar.</h4>
    <h2 className="font-mono text-2xl">My name is sharwan jung kunwar.</h2>
</div>

<div className='w-full h-30 bg-blue-400/30 mt-10 flex justify-center items-center rounded-2xl shadow-2xl backdrop-blur-md'>
  <p>The magic you are looking for is in the work you are avoiding.</p>
</div>

    </>
  )
}

export default App
