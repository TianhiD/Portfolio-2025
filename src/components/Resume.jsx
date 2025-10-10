import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './styles/Button.css';
import resumeImage from '../assets/resumeImg.png';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' }); 
  // once: false => can animate again when re-entering view
  // margin: control trigger point

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1ohHrCfHkFo5iIZr6tOzY0hhRMoZpOIz3/view?usp=sharing', '_blank');
  };

  return (
    <div className='bg-zinc-900 text-white py-20' id='resume'>
      <div 
        ref={ref}
        className='container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center'
      >
        {/* Animated Image */}
        <motion.img
          src={resumeImage}
          alt="Resume"
          className='mb-8 w-50 max-w-sm rounded'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Animated Text */}
        <motion.p
          className='text-center mb-8'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Get my resume
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="button"
          onClick={handleDownload}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <span className="text">Download</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Resume;
