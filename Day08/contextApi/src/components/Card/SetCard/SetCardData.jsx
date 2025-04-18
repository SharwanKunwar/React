import React from 'react'
import { useContext } from 'react'
import UserContext from '../../../context/UserContext';
import './SetCardData.css'
import { useState } from 'react';

function SetCardData() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSet = (e)=>{
        e.preventDefault();
        setUser({username,password});
    }


  return (
    <>
    <div id='setCard-outer'>
      <h2>Set card details</h2>
      <input id='name' className='input'
      type='text' 
      value={username} 
      onChange={(e)=> setUsername(e.target.value)}
      placeholder='Enter your name'/>
      <input id='pass' className='input'
      type='text' 
      value={password} 
      onChange={(e)=> setPassword(e.target.value)}
      placeholder='Enter your password'
      />
      <button id='btn' onClick={handleSet}>Set</button>
      
    </div>
    </>
  )
}


export default SetCardData
