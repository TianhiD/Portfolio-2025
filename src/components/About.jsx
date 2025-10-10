import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import heroImage from '../assets/TD_profile.jpeg';

// Component for each technology box
const TechBox = ({ label, emoji, index, isInView }) => (
  <motion.div
    className='bg-gray-800 hover:bg-purple-600 transition-colors duration-300 rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center text-center shadow-lg'
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
  >
    <div className='text-3xl mb-2'>{emoji}</div>
    <div className='text-sm font-semibold'>{label}</div>
  </motion.div>
);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <div className='bg-zinc-900 text-white py-20' id='about'>
      <div className='max-w-7xl mx-auto px-8 md:px-16 lg:px-24' ref={ref}>
        
        {/* Header */}
        <motion.h2
          className='text-4xl font-bold text-center mb-12'
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Get to know me
        </motion.h2>

        {/* Main flex container */}
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          
          {/* Profile Image with scroll animation */}
          <motion.div
            className='mb-8 md:mb-0 flex-shrink-0'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={heroImage}
              alt='Tianhi Devold'
              className='w-72 h-80 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer'
            />
          </motion.div>
          
          {/* Info and skills */}
          <motion.div
            className='flex-1'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <p className='text-lg mb-8 pt-3'>
              Hello, I'm Tianhi Devold, a front-end developer from Norway and I'm 24 years old. I'm majoring in front-end development at Kristiania University College right now. However, this spring (2024), I'm taking an exchange semester at SUU in Utah, US, in hopes of learning new skills and meeting people from around the world.<br /><br />
              I love developing aesthetically pleasing and intuitive user interfaces that seamlessly combine functionality and design. My passion for creating digital experiences that have a lasting impact and my interest in constantly evolving web technologies motivate me to pursue a career in front-end development. When I'm not coding, I enjoy traveling, photography, and spending time in nature.
            </p>
            
            <h3 className='text-2xl font-semibold mb-4'>Technologies that interest me</h3>

            {/* Grid of animated tech boxes */}
            <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
              {[
                { label: 'HTML & CSS', emoji: '🌐' },
                { label: 'JavaScript', emoji: '🟨' },
                { label: 'Java', emoji: '☕' },
                { label: 'Kotlin', emoji: '🚀' },
              ].map((tech, index) => (
                <TechBox key={tech.label} {...tech} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
