import React, {useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password});
    }


  return (
    <div>
        <h2>Login</h2>
        <input
        type='text'
        value={username}
        onChange={(e)=> setUserName(e.target.value)}
        />

        <input
        type='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      
    </div>
  )
}

export default Login
