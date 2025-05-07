import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContext'

function FinalCard() {
    const {user} = useContext(UserContext);

    if(!user){
        return(
        <div className='bg-blue-400 w-screen h-screen flex justify-center items-center'>
            <div className='bg-purple-500 w-[90%] h-[90%] flex justify-center items-center'>
                <div>
                    Set Data ...
                </div>
            </div>
        </div>
        ) 
    }
    return (
        <div className='bg-red-400 w-screen h-screen flex justify-center items-center'>
          <div className='bg-yellow-300/30 sm:w-6/25 w-[90%] h-[90%] flex flex-col justify-center items-center gap-4 pt-5 pb-5 rounded-2xl'>
      
            {/* Top div with Image */}
            <div className='w-full h-[50%] flex justify-center items-center'>
              <img className='bg-red-500 h-full rounded-2xl w-[90%] object-cover'
                src={user.image} 
                alt="Uploaded" 
              />
            </div>
      
            {/* Bottom div with User Info */}
            <div className='bg-purple-400 w-[90%] h-[40%] p-5 rounded-lg text-lg text-white font-semibold space-y-2'>
              <h1>Name: {user?.name || "loading..."}</h1>
              <h1>Age: {user?.age || "loading..."}</h1>
              <h1>Address: {user?.address || "loading..."}</h1>
              <h1>Contact: {user?.contact || "loading..."}</h1>
            </div>
      
          </div>
        </div>
      );
    }      

export default FinalCard
