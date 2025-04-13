import { useState,useEffect,useCallback,useRef } from 'react'
import './App.css'


function App() {

  //callState
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("Generated password appear here");
  const [allowNumber, setNumber] = useState(false);
  const [allowCharacter, setCharater] = useState(false);

  // function to generate password using useCallback
  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(allowNumber) str+="0123456789";
    if(allowCharacter) str += "@#$&*_+-!";

    for(let i=0; i<length-1; i++){
      pass+=str[Math.floor(Math.random()*(str.length))];
    }
    setPassword(pass);
  },[length,allowCharacter,allowNumber,setPassword]);

  // useEffect 
  useEffect(()=>{
    generatePassword();
  },[generatePassword,length,allowCharacter,allowNumber]);

  //useRef
  const inputRef = useRef(null);
  const copyToClipboard = useCallback(()=>{
    inputRef.current.select();
    navigator.clipboard.writeText(inputRef.current.value);
    alert("Password copied to clipboard");
  },[password]);

  return (
    <>
      <div id='box'>
          <div id='result-outer'>
              <input id='result-inner'
              type='text'
              readOnly
              value={password}
              ref={inputRef}
              />
            
          </div>
          <section id='opt'>
            <div id='range'>
            <label>Length : {length}</label>
            <input type='range' min={6} max={10} value={length}
            onChange={(e)=>setLength(e.target.value)}
             />
            </div>
            <div>
            <input type='checkbox'
            onChange={(e)=>setNumber(e.target.checked)}
             />
            <label>Num</label>
            </div>
            <div>
            <input type='checkbox'
            onChange={(e)=>setCharater(e.target.checked)}
             />
            <label>Char</label>
            </div>
          </section>
          <section id='btns'>
            <button className='btn' id='generate' onClick={generatePassword}>Generate</button>
            <button className='btn' id='copy' onClick={copyToClipboard}>Copy</button>
          </section>
      </div>
    </>
  )
}

export default App
