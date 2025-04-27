import React from 'react'
import './Home.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Home() {
  const style = {
    color: "blue"
  }
  const style01 = {
    color: "rgb(60, 226, 65)"
  }
  const style02={
    color: "rgb(240, 65, 34)"
  }
  return (
    <div id='home-outer'>
      <div className='home-box' id='home-left-box'>
        
        <div id='left-first-part'>
          <h2>Full stack <span style={style}>Developer</span> Sharwan <span style={style02}>Jung</span> Kunwar</h2>
          <span style={style}><h4>Super<span style={style01}>Power</span></h4></span>
        </div>

        <div id='left-second-part'>
            <p>Full-Stack Developer with a Passion for Building Scalable, Innovative Solutions.</p>
        </div>

        <div id='left-third-part'>
          <a href="#"><button className='left-home-btn' id='home-btn01'>View My Work</button></a>
          <a href="#"><button className='left-home-btn' id='home-btn02'>Let's Connect</button></a>
        </div>

        <div id='left-forth-part'>
          <section className='sec-tt'>
            <h3 className='left-forth-part-sec-tt-title'>3+</h3>
            <p>Coding Experience</p>
          </section>
          <section className='sec-tt'>
            <h3 className='left-forth-part-sec-tt-title'>10+</h3>
            <p>Projects</p>
          </section>
          <section className='sec-tt'>
            <h3 className='left-forth-part-sec-tt-title'>7+</h3>
            <p>Working On Code</p>
          </section>
        </div>

      </div>

      <div className='home-box' id='home-right-box'>

        {/* top */}
        <div className='home-right-box-tb' id='right-box-top'>

          <div className='home-right-top-box-lr' id='home-right-top-left'>
          <div id='floating-box'>
            <img id='home-box-profile-img' src="./src/assets/img04.png" alt="" />
          </div>
          </div>

          <div className='home-right-top-box-lr' id='home-right-top-right'>
          <DotLottieReact id='lottie-home-right-box'
          // src="https://lottie.host/6a467805-03c8-403b-b20f-e76678635a8d/7MpMzuUzyB.lottie"
          src="https://lottie.host/0aa3a785-b6d8-45a5-9f4f-10108ad2522b/oxFgyvEmjl.lottie"
          loop
          autoplay
          />
          </div>

        </div>

        {/* buttom */}
        <div className='home-right-box-tb'  id='right-box-buttom'>
          <div className='home-right-box-tb' id='home-buttom-box-left'>
          <DotLottieReact id='lottie-home-right-box'
          src="https://lottie.host/6a467805-03c8-403b-b20f-e76678635a8d/7MpMzuUzyB.lottie"
          loop
          autoplay
          />
          </div>

            <div className='home-right-box-tb' id='home-buttom-box-right'></div>

        </div>


      </div>
      
    </div>
  )
}

export default Home
