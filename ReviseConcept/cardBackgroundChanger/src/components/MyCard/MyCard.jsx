import React from 'react'

function MyCard(props) {
  return (
    <div className='bg-amber-300 w-[300px] h-[500px] m-6 flex flex-col justify-center items-center gap-3 rounded-2xl shadow-2xl' style={{backgroundImage: props.col}}>
        <div className='bg-red-400 w-[90%] h-[50%] rounded-2xl flex justify-center items-center'>img</div>
        <div className=' w-[90%] h-[40%] flex flex-col justify-center items-center p-3'>The magic you are looking for is in the work you are avoiding.</div>
    </div>
  )
}

export default MyCard
