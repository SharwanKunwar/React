import React from 'react'

function Card(props) {
return (
    <>

<div
  className="h-120 w-250 bg-cover bg-center flex items-center justify-center rounded-2xl"
  style={{backgroundImage:"url('./src/assets/pic02.jpg')",}}>
  <div className="text-white font-mono p-10 font-bold text-2xl border-none w-180 h-80 bg-white/10 backdrop-blur-md flex items-center justify-center rounded-lg border">
    {props.text}
  </div>
</div>


    </>
)
}

export default Card
