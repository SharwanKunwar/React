import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <div id='home-outer'>
        <div id='home-left'>
            <div id='home-text-box'>
                <h2 id='title'>Aspiring Chef with Global Inspiration</h2>
                <h3 id='sub-title'>Creative, committed, and growth-driven</h3>
                <p id='des-text'>Passionate about culinary arts, cultural exploration, and delivering excellence.</p>
                <a id='a-link' href="#about-outer"><button id='home-btn'>Know me</button></a>
            </div>
        </div>
        <div id='home-right'>
            <img id='ros-img' src="./src/assets/ros.jpg" alt="img" />
        </div>
    </div>
    </>
  )
}

export default Home
