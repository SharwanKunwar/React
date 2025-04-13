import { useState, useRef} from 'react'

import './App.css'

function App() {
  const [otp, setOTP] = useState("******");

  //function to get otp
  const getOTP = () =>{
    const demo = "0123456789";
    let finalOTP = "";

    for(let i=1; i<=6; i++){
      finalOTP += demo[Math.floor(Math.random()*(demo.length))];
    }
    setOTP(finalOTP);
  }

  //function for copy 
  const otpRef = useRef(null);
   // Function to copy and select
  const copyToClipboard = () => {
    if(otp === "******"){
      alert("Hit generate")
    }else{
      navigator.clipboard.writeText(otp);
      alert(`OTP ${otp} is coped to your clipbord`);
    }
  }
   


  return (
    <div id="main">
        <div id="box">
          <h2 ref={otpRef}>{otp}</h2>
        </div>
        <section>
        <button className='btn' onClick={getOTP}>Generate</button>
        <button className='btn' onClick={copyToClipboard}>Copy</button>
        </section>
    </div>
  )
}

export default App
