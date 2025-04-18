import React, { useContext } from 'react'
import UserContext from '../../context/UserContext';

function Profile03() {
    const {user} = useContext(UserContext);
    if(!user){
        return <div>Please login !!!</div>
    }else{
        return <div>Welcome {user.username} you have loged in sucessfully. and your passowrd is : {user.password}</div>
    }
  
}

export default Profile03
