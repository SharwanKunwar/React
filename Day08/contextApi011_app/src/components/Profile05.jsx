import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    
    if(!user){
        return <div>Please login ...</div>
    }else{
        return <div>Welcome {user.username} you are logged in and your password is : {user.password}</div>
    }
}

export default Profile
