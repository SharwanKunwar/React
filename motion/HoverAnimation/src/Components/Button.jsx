import React from 'react'
import {easeInOut, motion} from 'motion/react'

function Button() {
  return (
    <div
      className='[perspective::1000px] [transform-style:preserve-3d] h-screen w-screen bg-neutral-900 flex items-center justify-center'
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "9px 9px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button 
      whileHover={{
        rotateX:20,
        rotateY:20,
        boxShadow: "0px 20px 50px rgba(8,112,184,0.7)"
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
      }}
      style={{
        translateZ:100
      }}
      className='group relative text-neutral-500 font-bold px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]'>
        <span className='group-hover:text-cyan-500 transition-colors duration-300'>jay mahakal</span>
        {/* Base glowing line */}
        <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>

        {/* Glow on hover */}
        <span className='absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
      </motion.button>
    </div>
  )
}

export default Button



// initial={{
//         rotate:0
//       }}
//       animate={{
//         rotate:[0,-5,0]
//       }}
//       transition={{
//         duration: 0.3,
//         ease:easeInOut,
//         repeat:Infinity
//       }}