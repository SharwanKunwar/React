import React, { useEffect, useRef, useState } from 'react';
import './app.css';
import Home from './components/Home';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const scrollRef = useRef(null);
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true },
    });
    setScrollInstance(scroll);

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div id="main" ref={scrollRef} data-scroll-container className="relative">
      {/* Pass the Locomotive Scroll instance as prop */}
      <Home locoScroll={scrollInstance} />
    </div>
  );
}

export default App;
