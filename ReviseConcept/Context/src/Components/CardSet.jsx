import React from 'react'
import { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'


function CardSet() {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState(null);

  const {setUser} = useContext(UserContext);

  const handleClick = (e) =>{
    e.preventDefault();
    setUser({name,age,country});
    
  }

  return (
    <div className='bg-white w-[300px] h-[400px] rounded-lg flex justify-center items-center flex-col gap-5'>
      <input type='text'
      placeholder='Enter your name'
      value={name}
      onChange={(e)=> setName(e.target.value)}
      className='border'
      />
      <input
      type='number'
      placeholder='Enter your age'
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      className='border'
      />

      <input
      type='text'
      placeholder='Enter your Country'
      value={country}
      onChange={(e)=>setCountry(e.target.value)}
      className='border'
      />

      <button className='bg-sky-400 w-[90%] h-[40px] rounded-md' onClick={handleClick}>Set</button>
    </div>
  )
}

export default CardSet
