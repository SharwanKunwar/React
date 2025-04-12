import React, { useState } from 'react'
import './ColorBox.css'



function ColorBox(){
  const [color, setColor] = useState("pink");
  const [text, setText] = useState("Press the button")
  document.querySelector("body").style.background = color;
  
  return (
    <>
    <div id='contener'>
    <div id='text-content'>
        {text}
    </div>
    <div id='color-box'>
        <div id='box'>
            <button onClick={()=>{setColor("red"); setText("Red")}} >Red</button>
            <button onClick={()=>{setColor("green"); setText("Green")}}>Green</button>
            <button onClick={()=>{setColor("blue"); setText("Blue")}}>Blue</button>
        </div>
    </div>
    </div>

    </>
  )
}

export default ColorBox
