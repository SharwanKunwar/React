import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    
    if(!user){
        return <div>Please login</div>
    }else{
        return <div>Welcome {user.userName} you are logged in</div>
    }
        
    
}

export default Profile
