import { useState } from 'react'
import useGithubData from './CustomHooks/useGithubData'
import './App.css'

function App() {

  const [input, setInput] = useState("")
  const [gitData, setGitData] = useState();

  
  const show = ()=>{
    console.log(input);
    
  }
  
  const hold = useGithubData(input);
  const options = Object.keys(hold);
  console.log(options);

  return (
    <div>
        <input className='border'
        type='text'
        placeholder='Enter'
        onChange={(e)=>{
            setInput(e.target.value);
        }}/>

        <button className='bg-blue-500 p-10' onClick={show}>send</button>
    </div>
  )
}

export default App
