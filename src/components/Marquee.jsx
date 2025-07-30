import React from 'react';
import { motion } from 'framer-motion';
import { MARQUEE_TEXT } from '../constants';

const Marquee = () => {
  const contentWidth =  300 * MARQUEE_TEXT.length; 
  
  const animationDuration = 6;

  const marqueeVariants = {
    animate: {
      x: ['100%', `-${contentWidth}px`],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: animationDuration, 
          ease: 'linear',
        },
      },
    },
    stop: {
      x: 0,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <div className="mt-4 w-full bg-lime-300 text-black lg:py-6 overflow-hidden">
      <motion.div
        className='flex whitespace-nowrap'
        variants={marqueeVariants}
        animate="animate"
        whileHover="stop"
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {MARQUEE_TEXT.map((textItem, index) => (
              <h1
                key={`${i}-${index}`}
                className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl mr-8 inline-block"
              >
                {textItem}
              </h1>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;