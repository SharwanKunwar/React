import React, { useState } from 'react'

function CardDesign() {
    let [quote, setQuote] = useState("The magic you are looking for is in the work you are avoiding.");
    let [author, setAuthor] = useState(" Sharwan jung kunwar");
    function getQuote(){
        fetch("http://api.quotable.io/random").then((response)=>{
            return response.json();
        }).then((response_data)=>{
            setQuote(response_data.content);
            setAuthor(response_data.author);
            console.log(response_data.content);
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div>
      <div 
      className="w-[100%] h-[450px] flex rounded-3xl justify-center items-center bg-[url('./src/assets/spacemanDead.jpg')] bg-cover bg-center">

      <div id='card-details-contener'
        className="w-[500px] h-[300px] flex justify-center items-center text-white text-center p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg border-none">
          <div id='quote-text'>
          {quote}
          </div>
          <div id='author-text'>
                    Author:  { author}
          </div>
      </div>

    </div>
    <section id='btns'>
    <button id='copy-btn' className='btn'>Copy</button>
    <button id='next-btn' className='btn' onClick={getQuote}>Next</button>
    </section>
    </div>
  )
}

export default CardDesign
