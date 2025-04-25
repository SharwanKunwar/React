import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './About.css'

function About() {
  return (
    <div id='about-outer'>
      <div className='about-box' id='about-left-box'>
        <div id='img-main-box'>
          <DotLottieReact id='animation'
          src="https://lottie.host/631a7918-484d-444a-a869-2e7a287deda8/EOly0A0prK.lottie"
          loop
          autoplay
          />
        </div>
        <div id='blure-box'></div>
        <div id='social-icons'>
          <a href="#"><img id='social-icons-single' src="./src/assets/social01.png" alt="face" /></a>
          <a href="#"><img id='social-icons-single' src="./src/assets/social02.png" alt="face" /></a>
          <a href="#"><img id='social-icons-single' src="./src/assets/social03.png" alt="face" /></a>
          <a href="#"><img id='social-icons-single' src="./src/assets/social04.png" alt="face" /></a>
        </div>
        <div id='about-img-box'>
          <img id='img-sharwan' src="./src/assets/sharwanjungkunwar0007.jpg" alt="img" />
        </div>
      </div>



      <div className='about-box' id='about-right-box'>
        <div id="about-text-box">
          <div id="intro-section">
            <h2 id='about'>About Me</h2>
            <p id='about-sub'>Hello everyone,<br/><br/>
                              <big><b>M</b></big>y name is <b>Sharwan Jung Kunwar</b>. I live in <b>Kathmandu</b>, but I am originally from the <b>far west side of Nepal</b>. I am a BCA student at RR Campus, and my goal is to become a <b><i>software engineer</i></b>. Although English is not my first language, I am excited to share a bit about myself.
                              I specialize in Java, C, and Android development, with hands-on experience in Android Studio and MongoDB. I am deeply passionate about programming and enjoy tackling complex challenges in software development.
                              Beyond coding, I find joy in playing the guitar, exploring new games, and expanding my knowledge through reading and learning about emerging technologies. I'm always eager to learn and share insights with fellow tech enthusiasts. I'm excited to be a part of this community and am curious to meet other people who love tech as much as I do. Looking forward to engaging with you all.
                              <br/><br/>Thank you.
          </p>
          </div>
          <div id="teck-stack-section">
            <h3 className='h33'> ✨ Mahakal</h3>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
