import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function Home({ locoScroll }) {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    if (!locoScroll) return;

    // Update motion value on scroll
    locoScroll.on('scroll', (obj) => {
      scrollY.set(obj.scroll.y);
    });

    return () => locoScroll.off('scroll');
  }, [locoScroll, scrollY]);

  // Animate based on Y scroll
  const scale = useTransform(scrollY, [100, 1900], [0.5, 1]); // tweak based on your scroll height
  const opacity = useTransform(scrollY, [0, 0, 0], [1, 1, 1]);

  return (
    <div className="w-full">
      {/* Page 1 */}
      <div className="h-screen bg-blue-500 flex items-center justify-center text-white text-4xl">
        Page 1
      </div>

      

      {/* Page 2 (Animated Box) */}
      <div className="h-screen bg-gray-50 flex items-end justify-center text-white text-4xl relative">
        <motion.div
          style={{ scale, opacity }}
          className="w-[90%] h-[400px] bg-yellow-300 flex items-center justify-center rounded-xl"
        >
          The magic you are looking for is in the work you are avoiding.
        </motion.div>
      </div>

      {/* Page 3 */}
      <div className="h-screen bg-purple-500 flex items-center justify-center text-white text-4xl">
        Page 3
      </div>
    </div>
  );
}

export default Home;
