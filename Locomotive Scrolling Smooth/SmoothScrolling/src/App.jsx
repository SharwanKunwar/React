import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import './App.css';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone:{
        smooth: true
      }
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div id="main" className='relative' data-scroll-container ref={scrollRef}>

      <div className="w-screen h-screen bg-red-400 flex flex-col justify-center items-center text-2xl gap-3" data-scroll>
        <h2 className='pl-10 bg-yellow-400 w-full'></h2>
        <h1 className='bg-emerald-300 w-full flex justify-center'>Smooth</h1>
        <h3 className='bg-yellow-400 w-full flex justify-end pr-5'></h3>
      </div>
      
      <div className="w-screen h-screen bg-red-200 flex justify-evenly items-center gap-1" data-scroll>
        <div className='w-[200px] h-[200px] border-2 flex justify-center items-center'>1</div>
        <div className='w-[200px] h-[200px] border-2 flex justify-center items-center'data-scroll data-scroll-speed='10'>2</div>
        <div className='w-[200px] h-[200px] border-2 flex justify-center items-center'>3</div>
      </div>
      
      <div className="w-screen h-screen bg-red-400" data-scroll></div>

    </div>
  );
}

export default App;
