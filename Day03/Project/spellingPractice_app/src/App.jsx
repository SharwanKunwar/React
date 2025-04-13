import { use, useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState("love");
  const [animatedWord, setAnimatedWord] = useState("love");
  const [inputValue, setInputValue] = useState("sdf");
  const[preview, setPreview] = useState("Preview");

  


  const words = [
    "Good", "Bad", "Love", "Goal", "Discipline", "Unpredictable",
    "Focus", "Believe", "Dream", "Courage", "Balance", "Journey",
    "Respect", "Hope", "Create", "Inspire", "Strength", "Learn",
    "Explore", "Gratitude"
  ];
  

  const textEffect = (originalText) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!#$%^&*()_+-";
    let iteration = 0;

    let interval = setInterval(() => {
      setAnimatedWord(
        originalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );



      if (iteration >= originalText.length) {
        clearInterval(interval);
        setAnimatedWord(originalText); // final word shown
        // ✅ Compare input after animation is done
      if (inputValue.trim().toLowerCase() == word.toLocaleLowerCase()) {
      setPreview("✅ You are correct!")
        
      } else {
        setPreview("❌ You are Wrong!")
      }
      }
    
      iteration += 1 / 3;
    }, 30);
  }

  

  const showNewWordWithEffect = () => {

    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    textEffect(randomWord);
  }
  
  return (
    <div id="main" className="w-64 h-32">
      <div id="result-display">
        <div id='random-word'>
          {animatedWord}
        </div>
        <div id='input-field'>
          <input id='in' 
          type='text' 
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          placeholder='Enter word here'></input>
        </div>
      </div>
      <section>
        <button onClick={showNewWordWithEffect}>Process</button>
      </section>
      <section id='preview'>
        <h2>{preview}</h2>
      </section>
    </div>
  )
}

export default App
