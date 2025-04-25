import React from 'react'
import './Home.css'
function Home() {
  return (
    <>
    <div id='home-outer'>

        <div className='home-sub-box' id='home-left-box'>
            <div id='text-wrapper'>
            <h1 id='title'>Find Your Calm, Anytime.</h1>
            <p id='subTitle'>Relax your mind, reduce stres, and sleep better with guided meditations, soundscapes, and breating exercises - all in one app.</p>
            <section id='btns'>
                <button className='btn' id='download-btn'>Download Now</button>
                <button className='btn' id='explore-btn'>Explore Features</button>
            </section>
            
            <div id='text-details'>
                <section className='tt' id='text-one'>
                    <h4>$ 555M+</h4>
                    <p>of Users worldwide</p>
                </section>

                <section className='tt' id='text-two'>
                <h4>170+</h4>
                <p>ecuntries represented</p>
                </section>

                <section className='tt' id='text-three'>
                <h4>10%</h4>
                <p>global economic activity</p>
                </section>
            </div>

            </div>

            <div id='home-left-fotter'>
                <div>
                    <img className='b-icon' src="./src/assets/brandIcons/artificial-intelligence.png" alt="" />
                </div>
                <div>
                <img className='b-icon' src="./src/assets/brandIcons/blockchain.png" alt="" />
                </div>
                <div>
                <img className='b-icon' src="./src/assets/brandIcons/deep-learning.png" alt="" />
                </div>
                <div>
                <img className='b-icon' src="./src/assets/brandIcons/digital-transformation.png" alt="" />
                </div>
            </div>


            
        </div>




        <div className='home-sub-box' id='home-right-box'>
            <img id='home-pic' src="./src/assets/med.png" alt="img" />
            <section id='home-icons'>
                <a href="#"><img className='social-icons' src="./src/assets/facebook-circle-line.png" alt="facebook" /></a>
                <a href="#"><img className='social-icons' src="./src/assets/github-fill.png" alt="github" /></a>
                <a href="#"><img className='social-icons' src="./src/assets/linkedin-box-line.png" alt="linkdin" /></a>
            </section>
        </div>
    </div>
    </>
  )
}

export default Home
