import { useState } from 'react'
import './App.css'

function App() {
  //usestate
  let [counter, setCounter] = useState(0);
  let [msg, setMsg] = useState("result")

  function increment(){
    counter = counter+1;
    setCounter(counter);
    console.log("Increase clicked: ",counter);
    setMsg("good to go ..")
    
  }
  function decrease(){
    
    if(counter > 0){
      counter = counter-1;
      setCounter(counter);
      console.log("Decrease clicked: ",counter);
    }else{
      setMsg("not allowed < 0")
    }
  }

  return (
    <>
     <h1>React Counter App</h1>
     <div>
      <h2>{counter}</h2>
     </div>
     <button onClick={increment}>increase</button>
     <button onClick={decrease}>Decrease</button>
     <p>Your count is : {counter}</p>
     <p>{msg}</p>
    </>
  )
}

export default App
