import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Card() {

  const {user} = useContext(UserContext);

  if(!user){
    return (
      <div className='w-[250px] h-[300px] rounded-md flex justify-center items-center border border-white'>
      
    </div>
    )
  }else{
  return (
    <div className='bg-white w-[250px] h-[300px] rounded-md flex justify-center items-center flex-col gap-2 p-5 text-lg'>
      <p>
        Hello, {user.name} you are welcome here. you are {user.age} years old. And you are from {user.country} am i right.
      </p>
    </div>
  )
}
}

export default Card
