import React, { useContext, useState } from 'react';
import UserContext from '../Context/UserContext';
import {motion} from 'motion/react'

function CardOutput() {
    
  const { data } = useContext(UserContext);

  

if (!data.name) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 w-[400px] min-h-[500px] rounded-lg flex justify-center items-center flex-col p-4 gap-1 text-center"
    >
      <div className=" w-full h-6/12 flex justify-center items-center">
        <div className="bg-gray-300 animate-pulse w-[250px] h-[250px] rounded-full" />
      </div>

      <div className=" w-full h-6/12 flex flex-col items-start gap-3 px-5 pt-5">
        <div className="bg-gray-300 animate-pulse h-6 w-42 ml-20 rounded" />
        <div className=" w-full flex flex-col items-start gap-3 mt-2">

          {["Name", "Age", "Phone", "City", "Email"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="flex items-center gap-3 w-full"
            >
              <div className="bg-gray-300 animate-pulse h-4 w-20 rounded" />
              <div className="bg-gray-200 animate-pulse h-4 w-40  rounded" />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="bg-gray-300 animate-pulse h-5 w-32 mt-5  rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
      </div>
    </motion.div>
  );
}



  return (
    <div className="bg-gray-400 border-1 border-white w-[400px] min-h-[500px] rounded-lg flex justify-center items-center flex-col p-4 gap-1 text-center">
        <div className=' w-full h-6/12 flex justify-center items-center'>
        <img src={data.img} alt="img" className='bg-white w-[250px] h-[250px] rounded-full flex justify-center items-center object-cover object-center shadow-md' />
    </div>

    <div className=' w-full h-6/12'>
            <h1 className='border-b-3 border-white'>{data.job}</h1>
            <section className=' w-full flex pl-5 flex-col items-start gap-2 mt-7'>
                <h3 className='font-mono'><span className='font-bold text-lg'>Name</span>  : {data.name}</h3>
                <h3 className='font-mono'><span className='font-bold text-lg'>Age</span>   : {data.age}</h3>
                <h3 className='font-mono'><span className='font-bold text-lg'>Phone</span> : {data.phone}</h3>
                <h3 className='font-mono'><span className='font-bold text-lg'>City</span>  : {data.city}</h3>
                <h3 className='font-mono'><span className='font-bold text-lg'>Email</span> : {data.email}</h3>
                
            </section>
            
    </div>
    </div>
);
}

export default CardOutput;
