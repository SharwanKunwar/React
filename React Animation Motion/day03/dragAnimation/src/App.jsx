import React from 'react'
import {motion} from 'motion/react'

function App() {
  return (
    <div className='bg-black w-[90%] h-[90%] flex justify-center items-center'>
      <motion.div 
      drag
      whileDrag={{
        scale: 1.2,
        z:180
      }}
      dragConstraints={{
        top: -200,
        left:-500,
        right: 500,
        bottom: 200
      }}
      className='bg-sky-400 w-[250px] h-[400px] rounded-2xl'>asdf</motion.div>
    </div>
  )
}

export default App
