import React from 'react'

function Homepage() {
  return (
    <>
    <div className='bg-blue-500 w-screen h-screen flex flex-wrap'>

        <div className='bg-white w-6/12 h-full flex flex-col justify-center items-center gap-10'>
        <h1 className='font-bold text-6xl '>Learn From The <span className='text-green-400'>Collest Coding <br/> Platform</span> in <br/> Nepal.</h1>
        <section className='w-[90%]'>
        <button className='w-50 h-10 bg-black text-white font-bold shadow-2xl rounded-sm hover:bg-amber-300 hover:text-black'>Explore here</button>
        </section>
        
        </div>

        <div className='bg-cyan-600 w-6/12 h-full'>
        <img className='w-full h-full object-cover' src="https://ik.imagekit.io/sheryians/photed_MVice1qZE.png" alt="" />
        </div>

    </div>
    </>
  )
}

export default Homepage
