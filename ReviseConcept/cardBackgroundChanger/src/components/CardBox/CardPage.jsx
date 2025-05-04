import React, { useState } from 'react'
import MyCard from '../MyCard/MyCard'

function CardPage() {
  const [color, setColor] = useState("skyblue");

  const handleClick = (e)=>{
    if(e.target.id === "red"){
      setColor("radial-gradient( circle farthest-corner at 6.3% 21.8%,  rgba(236,6,117,1) 0%, rgba(13,32,67,1) 90% )");
    }else if(e.target.id === "blue"){
      setColor("linear-gradient( 98.7deg,  rgba(34,175,245,1) 2.8%, rgba(98,247,151,1) 97.8% )");
    }else if(e.target.id === "yellow"){
      setColor("linear-gradient( 89.5deg,  rgba(104,208,232,1) 1.5%, rgba(231,144,245,1) 100.5% )");
    }
  }

  return (
    <div className="h-screen w-full bg-gray-100 p-4">
  <div className="grid sm:grid-cols-12 grid-col-12 sm:gap-4 sm:h-full">
    <div className="bg-gray-300 sm:col-span-1 sm:flex sm:flex-col sm:justify-evenly sm:items-center flex justify-evenly p-5 w-full h-full">
        <button id='red' onClick={handleClick} className='shadow-2xl w-[50px] h-[50px] rounded-[5px] sm:flex sm:justify-center sm:items-center'
          style={{
            background: 'radial-gradient(circle farthest-corner at 6.3% 21.8%, rgba(236,6,117,1) 0%, rgba(13,32,67,1) 90%)',
          }}
        ></button>
        <button id='blue' onClick={handleClick} className='shadow-2xl w-[50px] h-[50px] rounded-[5px] sm:flex sm:justify-center sm:items-center'
        style={{
          background: 'linear-gradient( 98.7deg,  rgba(34,175,245,1) 2.8%, rgba(98,247,151,1) 97.8% )',
        }}
        ></button>
        <button id='yellow' onClick={handleClick} className='shadow-2xl w-[50px] h-[50px] rounded-[5px] sm:flex sm:justify-center sm:items-center'
        style={{
          background: 'linear-gradient( 89.5deg,  rgba(104,208,232,1) 1.5%, rgba(231,144,245,1) 100.5% )',
        }}
        ></button>
    </div>
    <div className="bg-gray-400 sm:col-span-11 flex justify-center items-center">
        <MyCard col={color}/>
    </div>
  </div>
</div>

  )
}

export default CardPage
