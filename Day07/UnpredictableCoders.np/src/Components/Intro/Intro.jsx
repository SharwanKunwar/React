import React from 'react'
import './Intro.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Intro() {
  return (
    <>
    <div id='intro-outer'>
      <div id="text-box" className='box'>
        <h2 id='logo-h2'>Unpredictable Coders<span>;</span> <span>Community Beyound Boundaries</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, in.</p>
        <section id='btns'>
          <button id='getStart-btn' className='btn'>Get Started</button>
          <button id='learnMore-btn' className='btn'>Learn more..</button>
        </section>
      </div>

      <div id="anime-box" className='box'>

        <DotLottieReact id='code'
        src="https://lottie.host/45fdeb77-1b44-4974-870a-41744eab2e77/VNVxmt1iYh.lottie"
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
        ariaLabel="Coding animation"/>

      </div>

    </div>
    </>
  )
}

export default Intro
