import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import heroImage from '../assets/TD_profile.jpeg';

// Component for each technology box
const TechBox = ({ label, emoji, index, isInView }) => (
  <motion.div
    className='border-2 border-emerald-600 hover:bg-orange-100 transition-colors duration-300 rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center text-center shadow-lg'
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
    <div className='bg-orange-50 text-sky-950 py-20' id='about'>
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
              Hello, I'm Tianhi Devold, a front-end developer from Norway and I'm 25 years old. I have a bachelor in front-end development at Kristiania University College. I am currently taking a master`s degree in Technology, Innovation and Knowledge at the University of Oslo. However, this spring (2024), I'm taking an exchange semester at SUU in Utah, US, in hopes of learning new skills and meeting people from around the world.<br /><br />
              I love developing aesthetically pleasing and intuitive user interfaces that seamlessly combine functionality and design. My passion for creating digital experiences that have a lasting impact and my interest in constantly evolving web technologies motivate me to pursue a career in front-end development. When I'm not coding, I enjoy traveling, photography, and creating digital art.
            </p>
            {/* Technologies Section */}
            <div className="mt-12">
              <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-2  text-sky-950 tracking-tight">
                My Tech Stack & Interests
              </h3>
              <p className="text-center text-base md:text-lg text-gray-600 mb-6">
                I love working with modern web and mobile technologies to build beautiful, functional experiences.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
                {[
                  { label: 'HTML & CSS', emoji: '🌐' },
                  { label: 'JavaScript', emoji: '🟨' },
                  { label: 'Java', emoji: '☕' },
                  { label: 'Kotlin', emoji: '🚀' },
                  { label: 'React', emoji: '⚛️' },
                  { label: 'Swift', emoji: '🦅' },
                ].map((tech, index) => (
                  <div
                    key={tech.label}
                    className="transform hover:-translate-y-2 transition duration-300"
                  >
                    <TechBox {...tech} index={index} isInView={isInView} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;