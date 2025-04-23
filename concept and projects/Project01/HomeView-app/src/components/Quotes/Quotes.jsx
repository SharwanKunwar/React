import React, { useEffect, useState, useRef } from 'react'
import './Quotes.css'



function Quotes() {

  //states
  const [randQuote, setRandQuote] = useState("Hey there 👋 Click 'Next' to get your first dose of inspiration!");
  const [quoteAuthor, setQuoteAuthor] = useState("...");
  const [isAnimating, setIsAnimating] = useState(false);
  const quoteRef = useRef(null); 
  const message = `
Whatever happens, stay alive.
Don't die before you're dead.
Don't lose yourself, 
Don't lose hope, 
Don't lose direction. 

Stay alive, with yourself, 
with every cell of your body, with every fiber of your skin.

Stay alive, learn, study, think, read, build, invent, create, speak, write, dream, design.

Stay alive, stay alive inside you, 
Stay alive also outside, 
Fill yourself with colors of the world, 
Fill yourself with peace, 
Fill yourself with hope.

Stay alive with joy.
There is only one thing 
you should not waste in life,
and that's life itself...
  `


  //text effect function
  const textEffect = (element, time) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!#$%^&*()_+-";
    let interval = null;
    const originalText = element.textContent;
    let iteration = 0;

    setIsAnimating(true); // 👈 disable Next button


    clearInterval(interval);

    interval = setInterval(() => {
      element.textContent = originalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) {
            return originalText[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
        setIsAnimating(false); // 👈 re-enable Next button
      }

      iteration += 1 / 3;
    }, time);
  };



  //function for copy quotes
  const copyQuote = () => {
    const quote = `"${randQuote}" — ${quoteAuthor}`;
    navigator.clipboard.writeText(quote)
      .then(() => alert(`Quote copied to clipboard!\n: `+randQuote))
      .catch(err => console.error("Failed to copy", err));
  };
  

  //function to get new || fetch quotes from the api || api call
  const newQuote = () => {
          fetch('http://api.quotable.io/random').then(response => response.json())
        .then(data => {
          if(data.content.length < 200){
            setRandQuote(data.content);
            setQuoteAuthor(data.author);
          }else{
            setRandQuote(`"The magic you are looking for is in the work you are avoiding.`);
            setQuoteAuthor("Sharwan jung kunwar;");
          }
          
        }).catch((error)=>{
          console.log("Error: ",error);
        })
  }


  //only for time first
  // useEffect(()=>{
  //   newQuote();
  // },[]);
  
  //implement textEffect on have quote using refrence of quote final (id: quote-box > randQuote) 
  useEffect(() => {
    if (quoteRef.current) {
      textEffect(quoteRef.current, 20);
    }
  }, [randQuote]); // 👈 Triggers effect whenever quote updates
  


  return (
    <div id='quotes-outer'>
      <div id="quote-left-box" className='con-box'>
        {message}
      </div>
      <div id="quote-right-box" className='con-box'>
        <div id="quote-Box" ref={quoteRef}>{randQuote}</div>
        <p id="author">Author: {quoteAuthor}</p>
        <div id="buttons">
          {/* //show loading while flag is true */}
        <button id='next-quote' onClick={newQuote} disabled={isAnimating}>{isAnimating ? "Loading..." : "Next"}</button>
        <button id='copy-quote' onClick={copyQuote}>Copy</button>
        </div>
      </div>
    </div>
  )
}

export default Quotes
