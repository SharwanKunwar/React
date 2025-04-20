import React from 'react'
import useTheme from '../contexts/Theme'

function ThemeBtn() {

    const {themeMode, lightTheme, darkTheme} = useTheme();
    const handleChange = (e)=>{
        const checkState = e.currentTarget.checked;
        const target = document.querySelector("#card");
        if(checkState){
            target.style.backgroundColor = "black"
            target.style.color = "white";
        }else{
            target.style.backgroundColor = "gray"
            target.style.color = "black";
            
        }
    }

  return (
    <div>
    this is theme btn
    <input
    type='checkbox'
    value= ""
    // className=''
    onChange={handleChange}
/>
    </div>
  )
}

export default ThemeBtn
