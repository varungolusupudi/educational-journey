import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useParallax } from 'react-scroll-parallax';

const StorySection = ({ data, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const parallax = useParallax({
    speed: index % 2 === 0 ? 10 : -10,
    scale: [0.8, 1.2],
    rotate: [0, index % 2 === 0 ? 5 : -5]
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      ref={ref}
      className={`relative min-h-screen py-32 my-24 ${data.color}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
      
      <motion.div
        ref={parallax.ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={childVariants} className="space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-sm font-medium text-gray-200">
                {data.location}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {data.title}
            </h2>
            
            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-300">
              {data.quote}
            </blockquote>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              {data.content}
            </p>

            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${data.theme === 'tracking' ? 'bg-red-500/20 text-red-200' :
                  data.theme === 'fugitivity' ? 'bg-blue-500/20 text-blue-200' :
                  'bg-green-500/20 text-green-200'}`}>
                #{data.theme}
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={`/images/${data.visual}`}
                alt={data.title}
                className="w-3/4 h-3/4 object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default StorySection; 