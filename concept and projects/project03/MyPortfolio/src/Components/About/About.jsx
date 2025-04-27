import React from 'react'
import './About.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function About() {
  return (
    <div id='about-outer'>

      <div id="about-top">
        <h1 id='about-title-h1'>About</h1>
        <p>"Passionate about coding, learning, and creating impactful solutions."</p>
      </div>

      <div id="about-buttom">
      <div id='about-buttom-left-box'>
        <div id='about-buttom-lottie-box'>
                    <DotLottieReact id='lottie-home-right-box'
                    src="https://lottie.host/6fc13ae1-0476-4d39-a077-d42d1d73fb43/gxuZxpvWIk.lottie"
                    loop
                    autoplay
                    speed={0.3}
                    />
        </div>
        <div id='about-buttom-left-blur-box'>
        </div>
          <div id='about-buttom-left-imgBox'>
            <img id='about-buttom-left-imgBox-img' src="./src/assets/sharwanjungkunwar0007.jpg" alt="img" />
          </div>
          <div id='about-buttom-left-social-icons-box'>
            <a href="#"><img className='about-buttom-left-social-icons-box-icon' src="./src/assets/social-icons/social01.png" alt="img" /></a>
            <a href="#"><img className='about-buttom-left-social-icons-box-icon' src="./src/assets/social-icons/social02.png" alt="img" /></a>
            <a href="#"><img className='about-buttom-left-social-icons-box-icon' src="./src/assets/social-icons/social03.png" alt="img" /></a>
            <a href="#"><img className='about-buttom-left-social-icons-box-icon' src="./src/assets/social-icons/social04.png" alt="img" /></a>
          </div>
      </div>


      <div id='about-buttom-right-box'>
        <div id='about-buttom-right-box-textBox-outer'>
          <h2>About Me</h2>
          <h1>Forntend Developer & Aspiring Full-Stact Developer</h1>
          <p>Hi, I'm Sharwan Jung Kunwar, a backend developer skilled in Java, C, and Android development, with experience in Spring Boot, PostgreSQL, and Android Studio. Currently, I focus on backend development but am expanding my skills in HTML, CSS, and JavaScript to become a full-stack developer. Beyond coding, I enjoy playing guitar, gaming, and exploring emerging technologies. I believe in continuous learning and knowledge-sharing. Let’s connect and build something amazing! 🚀</p>
          <h3>🚀 "From Forntend to full-stack—learning every day to create seamless digital experiences."</h3>


          <div id='about-buttom-right-box-textBox-infoDetails-box'>

            <div className='info-box' id="about-buttom-right-box-textBox-infoDetails-box-left">
              <section className='sec-info-text' id='info-box-left-one'>
                <h4>Full Name</h4>
                <h3 className='info-sub-text'>Sharwan jung kunwar</h3>
              </section>
              <section className='sec-info-text' id='info-box-left-two'>
                <h4>Age</h4>
                <h3 className='info-sub-text'>20 Years</h3>
              </section>
              <section className='sec-info-text' id='info-box-left-three'>
                <h4>Occupation</h4>
                <h3 className='info-sub-text'>Software Developer</h3>
              </section>
            </div>

            <div className='info-box' id="about-buttom-right-box-textBox-infoDetails-box-right">
            <section className='sec-info-text' id='info-box-right-one'>
              <h4>Phone</h4>
              <h3 className='info-sub-text'>+9779763290022</h3>
            </section>
              <section className='sec-info-text' id='info-box-right-two'>
                <h4>Email</h4>
                <h3 className='info-sub-text'>Sharwankunwar07@gmail.com</h3>
              </section>
              <section className='sec-info-text' id='info-box-right-three'>
                <h4>Nationality</h4>
                <h3 className='info-sub-text'>Nepali</h3>
              </section>
            </div>

          </div>


        </div>

      </div>




      </div>
      
    </div>
  )
}

export default About
