import React, { useContext } from 'react'
import './Card.css'
import UserContext from '../../../context/UserContext';


function Card() {
    const {user} = useContext(UserContext);
    
    
  
    if(!user){
        return <div>Fill the blank...</div>
    }else{
        return <div>
          <div id='card-outer'>
      <div id='img-box'>
        <img src="./src/assets/peakpx (1).jpg" alt="pic" />
      </div>
      <div id='text-box'>
        <h3>{user.username}</h3>
        {/* <h4>{user.password}</h4> */}
      </div>
    </div>
         </div>
    }
    
  
  
}

export default Card
