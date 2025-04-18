import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);

    if(!user){
        return <div>please login...</div>
    }else{
        return <div>welcome {user.username} you are logged in and your password is : {user.password}</div>
    }

}

export default Profile
