import React from 'react'
import './Intro.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {Link} from 'react-router'

function Intro() {
  const admin = 'Developed with passion';
  const style = {
    color: "white"
  }
  return (
    <div id='intro-outer'>
      <div id='left-box' className='box'>
        <h1 id='title'><span style={style}>Unpredictable</span> Code {admin.toLocaleUpperCase()}</h1>
        <p>The magic you are looking for is in the work you are avoiding. "Read and Blue stick to the plan just lie a glue"</p>
      
        <section>
        <button>Know me</button>
        <button id='learn-more'>Learn more</button>
        </section>
        <div id='socialMedia'>
          <Link to="https://facebook.com"><img src="./src/assets/facebook.png" alt="facebook" /></Link>
          <Link to="https://github.com"><img src="./src/assets/github.png" alt="github" /></Link>
          <Link to="https://linkdin.com"><img src="./src/assets/linkdin.png" alt="linkdin" /></Link>
        </div>
      </div>
      <div id='right-box' className='box'>
        <div id="lottie-animation">
        <DotLottieReact id='lo'
            src="https://lottie.host/754923b5-f921-49df-8df4-85d847700a8d/KFXv6Eh2ug.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  )
}

export default Intro
