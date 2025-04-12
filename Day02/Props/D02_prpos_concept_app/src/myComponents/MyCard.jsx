import React, { useState } from 'react'


function MyCard(props) {
    
  return (
    <div className='mb-5'>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="p-3 w-70 h-70 md:w-48 md:h-auto  rounded-3xl mx-auto" src={props.Obj.imgUrl} alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {props.Obj.content}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {props.Obj.MyName}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {props.Obj.profession}
      </div>
    </figcaption>
    </div>
  </figure>
    </div>
  )
}

export default MyCard
