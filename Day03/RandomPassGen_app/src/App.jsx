import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'
import './index.css'

function App() {

  // ** useState **
  // useState is a hook that allows you to add state to your functional components
  // it takes one argument, the initial state
  // it returns an array with two elements, the current state and a function to update the state
  // in this case, we are using useState to create three state variables
  // length, numberAllowed, charAllowed
  // length is the length of the password
  // numberAllowed is a boolean that indicates whether numbers are allowed in the password
  // charAllowed is a boolean that indicates whether special characters are allowed in the password
  
  const[length, setLength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("asdf");
  

  // ** callback **
  // useCallback is used to memoize the function so that it doesn't get recreated on every render
  // it takes two arguments, the function and the dependency array
  // the function will be recreated only when the dependencies change
  // in this case, the function will be recreated only when the length, numberAllowed, charAllowed changes
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="~!@#$%^&*+_-";
    
    for(let i=0; i<=length-1; i++){
      let selectNum = Math.floor(Math.random()*(str.length));
      pass+=str[selectNum];
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword]);

  // ** useEffect **
  // useEffect we use to track the changes in the state in the component
  // whenever the length, numberAllowed, charAllowed changes it will call the passwordGenerator function
  // this is the dependency array
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator]);


  // ** useRef ** 
  // useRef is used to create a reference to a DOM element
  // it takes one argument, the initial value
  // it returns an object with a current property that can be used to access the DOM element
  // in this case, we are using useRef to create a reference to the input element
  const inputRef = useRef(null);
  const copyToClipboard = useCallback(()=>{
    inputRef.current.select();
    navigator.clipboard.writeText(inputRef.current.value);
    // alert("Password copied to clipboard");
  },[password])
  
  // ** return **
  return (
    <>
      <div className="flex w-150 flex-col items-start space-y-4 p-4">
        <div className="flex items-center bg-gray-200 rounded-xl px-2 py-1 w-full max-w-md">
            <input
              type="text"
              value={password}
              readOnly
              ref={inputRef}
              className="flex-1 bg-gray-200 text-gray-500 font-semibold focus:outline-none px-3 py-2 rounded-xl"/>
            <button className="ml-2 bg-black text-white font-bold px-4 py-2 rounded-md" onClick={copyToClipboard}>Copy</button>
          </div>

          {/* // box for length and number and char  */}
        <div>
          <div className='flex gap-5'>
            <div className=' w-31 h-10' >
              <label>length : {length}</label><br/>
                <input 
                  type='range'
                  min={6}
                  max={10}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=>{
                    setLength(e.target.value);
                  }}/>
        </div>

          {/* //box for number and char  */}
        <div className='w-35 flex justify-center items-center gap-2'>

          {/* number  */}
          <input type='checkbox'
            onChange={(e)=>{
              setNumberAllowed(e.target.checked);
            }}/><label>Num</label>

          {/* char  */}
          <input type='checkbox'
            onChange={(e)=>{
              setCharAllowed(e.target.checked);
            }}/><label>Char</label>
      
          </div>  
        </div>
      </div>
        <button onClick={passwordGenerator} className="font-bold bg-gray-900 px-6 py-2 rounded-xl">Generate</button>
    </div>

  </>
  )
}

export default App
