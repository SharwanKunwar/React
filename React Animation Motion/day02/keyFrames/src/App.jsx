import React from 'react'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-white'>
      <motion.h1
        initial={{ y: -50, opacity: 0, filter: 'blur(5px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{
          duration: 0.7,
          ease: 'easeOut',
        }}
        className="text-5xl font-bold"
      >
        hellow
      </motion.h1>
    </div>
  )
}

export default App
