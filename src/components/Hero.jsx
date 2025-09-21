import React from 'react';
import heroImage from '../assets/Subject.png';
import './styles/Hero.css';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16' id='hero'>
      <img
        src={heroImage}
        alt=""
        className='mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4x1 font-bold pt-10'>
        Welcome to my portfolio page!
        <br />
        I'm {''}
        <span className='text-transparent bg-clip-text bg-emerald-600'>Tianhi Devold</span>
      </h1>
      <div className='banner'>
        <p className='text-lg mt-4'>Full Stack Developer | Open Source Enthusiast | Tech Blogger</p>
      </div>
    </div>
  );
};

export default Hero;