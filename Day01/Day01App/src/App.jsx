import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mahakal + Sharwan</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Hit 
        </button>
        <p>
          make one more : <span>{count}</span>
        </p>
      </div>
      <p className="read-the-docs">
        The magic you are looking for is in the work you are avoiding.
      </p>
    </>
  )
}

export default App
