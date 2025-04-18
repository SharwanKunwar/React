import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function TakeData() {

    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");


    const {setUser} = useContext(UserContext);
    

    const handleSet = (e) => {
        e.preventDefault();
        setUser({username,age,address});
    }

  return (
    <div>
      <h2>Enter your data</h2>
      <input
      type='text'
      placeholder='Enter username'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />

    <input
      type='number'
      placeholder='Enter age'
      value={age}
      onChange={(e) => setAge(e.target.value)}
      />

    <input
      type='text'
      placeholder='Enter address'
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleSet}>Set</button>
    </div>
  )
}

export default TakeData
