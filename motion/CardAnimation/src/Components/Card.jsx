import { Drill, Magnet, Menu, Rotate3D, Route, RssIcon, X } from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import { useState } from 'react';



function Card() {
  const [open, setOpen] = useState(true);
  return (
<>
<AnimatePresence>
{open && (
      <motion.div 
      exit={{
        opacity: 0,
        scale:0.98,
        filter:"blur(10px)"
         
      }}
    initial={{opacity:0, scale:0.98, filter:"blur(10px)"}}
    animate={{opacity:1, scale:1.1,filter:"blur(0px)"}}
    transition={{duration:1,ease:"easeInOut"}}
    className={`w-72 min-h-[26rem] h-[28rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-5`}>

      <div>
        <h1>Card Designed by Sharwan</h1>
        <p className='text-neutral-500 pt-3'>
          A collection of UI components for your project, get on with it.
        </p>
      </div>

      <section className=' w-full flex justify-center items-center mt-5'>
        <div className='flex justify-between items-center w-[70%] h-[40px] p-3 rounded-md shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
            <img src="react.svg" alt="img" />
            Features <X  onClick={(e) => setOpen(false)} size={20}/></div>
      </section>
      <div className='bg-neutral-100 w-full h-[250px] mt-5 rounded-md flex justify-center items-center shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
        <motion.div 
        initial={{opacity:0,filter:"blur(10px)"}}
        whileHover={{opacity:1,filter:"blur(0px)"}}
        // transition={{duration:0.5,ease:"easeInOut"}}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }}
        className='bg-gray-50 w-full h-[250px] rounded-md p-5'>
          <div className=' w-full h-[20%] flex gap-5'><Route className='shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-1' size={30}/> <span>Easy Path</span></div>
          <div className=' w-full h-[20%] flex gap-5'><Drill className='shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-1' size={30}/><span>Quick drilling</span></div>
          <div className=' w-full h-[20%] flex gap-5'><Rotate3D className='shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-1' size={30}/>3D view</div>
          <div className=' w-full h-[20%] flex gap-5'><Magnet className='shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-1' size={30}/>Attract fortune</div>
          <div className=' w-full h-[20%] flex gap-5'><RssIcon className='shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-1' size={30}/>Good Connectivity</div>
        </motion.div>
        
      </div>



    </motion.div>
)}
</AnimatePresence>
</>
  );
}

export default Card;
