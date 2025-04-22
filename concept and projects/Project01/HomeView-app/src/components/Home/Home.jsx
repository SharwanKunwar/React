import React, { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Home.css'

function Home() {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(()=>{

    //function to get date and time
    const dateAndTime = () => {
    const Now = new Date();

    const myDate = Now.toLocaleDateString();
    const myTime = Now.toLocaleTimeString();

    setDate(myDate);
    setTime(myTime);

    }

    dateAndTime();
    const interval = setInterval(dateAndTime, 1000); // update every second

    
    
    //function to get random quotes from array
    const RandomQuotes = () =>{
      const quotes = [
        `"Believe you can and you're halfway there."`,
        `"Dream big and dare to fail.`,
        `"Turn your wounds into wisdom."`,
        `"What you do today can improve all your tomorrows."`
      ];
      
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }
    RandomQuotes(); // call once on mount
  
    
    return () => clearInterval(interval); // cleanup
    
  },[]);


  
  
  
  


  
  return (
    <div id='home-outer'>

      <div id='left-box'>
        <div id='date-and-time'>
          <div id="date">{date}</div>
          <div id="time">{time}</div>
        </div>
        <div id="quote"><h3>{quote}</h3></div>
      </div>


      <div id='right-box'>
      <DotLottieReact
      src="https://lottie.host/2816a3f1-cbb2-4563-bb57-ff9e5a06a8a8/eBJO4NRs5r.lottie"
      loop
      autoplay
    />
      </div>
    </div>
  )
}

export default Home
