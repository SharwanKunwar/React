import React from 'react'
import {motion} from 'motion/react'

const App = () => {

  return (
    <>
    <div className='bg-gray-50 w-[90%] h-[50%] flex justify-center items-center relative rounded-lg'>
    
    <motion.div
    className='bg-pink-400 w-[100px] h-[100px] flex justify-center items-center rounded-full shadow-lg'
    initial = {{
      y:-300,
      x:-180
    }}
    animate={{
      x:0,
      y:-142,
      rotate: 710,
      scale: 1.5,
    }}
    transition={
      {
        duration: 1,
        delay:1
      }
    }
    >
    Google
    </motion.div>
    <motion.h1
    className='text-black absolute bg-blue-400 p-1 w-[100px] flex justify-center items-center rounded-lg'
    initial = {{
      y:0,
      x:0
    }}
    animate = {{
      x:0,
      y:0,
      rotate:1800,
      // scale: 1.5
    }}
    transition={{
      duration: 1,
      // delay:1
      repeat: Infinity
    }}
    >Look up</motion.h1>

    </div>
    </>
  )
}

export default App
