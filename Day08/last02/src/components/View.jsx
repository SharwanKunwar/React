import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function View() {
  const {user} = useContext(UserContext);
  if(!user){
    return <div>Enter your details</div>
  }else{
    return <div>userName: {user.username} age: {user.age} address: {user.address}</div>
  }
}

export default View
