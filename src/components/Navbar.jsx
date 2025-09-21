import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll event listener to change the navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-black'
      }`}
      style={{ height: '80px', paddingTop: '10px', paddingBottom: '10px' }} // Added padding for vertical spacing
    >
      <div className='container flex justify-between items-center px-4 md:px-16'>
        <div className='text-2xl font-bold text-white hover:text-green-300 transition-colors duration-300'>
          Tianhi Devold
        </div>
        <button
          className='md:hidden text-white text-2xl'
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div
          className={`space-x-6 md:flex items-center ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <a
            href="#home"
            className='block md:inline font-mono font-bold text-lg text-white hover:text-green-300 transition-colors duration-300'
          >
            Home
          </a>
          <a
            href="#about"
            className='block md:inline font-mono font-bold text-lg text-white hover:text-green-300 transition-colors duration-300'
          >
            About me
          </a>
          <a
            href="#projects"
            className='block md:inline font-mono font-bold text-lg text-white hover:text-green-300 transition-colors duration-300'
          >
            Projects
          </a>
          <a
            href="#resume"
            className='block md:inline font-mono font-bold text-lg text-white hover:text-green-300 transition-colors duration-300'
          >
            Resume
          </a>
          <a
            href="#contact"
            className='block md:inline font-mono font-bold text-lg text-white hover:text-green-300 transition-colors duration-300'
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;