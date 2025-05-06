import React from 'react'

function Card() {
  return (
    <>
    <div className='bg-white/30 w-[400px] h-[650px] rounded-2xl flex flex-col justify-center items-center shadow-2xl gap-6 backdrop-blur-2xl border border-white/20'>
        
    <div className='w-[90%] h-[65%] rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.5)]'>
            <img className='w-full h-full object-cover rounded-2xl' src="./src/assets/photoes/pic01.jpg" alt="img" />
        </div>

        <div className=' w-[90%] h-[150px] flex flex-col  gap-2'>
            <h2 className=' w-[100%] font-san text-[20px] font-bold [text-shadow:_2px_2px_90px_orange]'>Message:</h2>
            <p className='w-[100%] font-sans'>"Everyone thinks of changing the world, but no one thinks of changing himself."<br/><br/> — Leo Tolstoy</p>
            
        </div>

    </div>

    </>
  )
}

export default Card
