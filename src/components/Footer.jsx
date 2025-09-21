import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-20' id='footer'>
      <p className='text-center'>&copy; {new Date().getFullYear()} Tianhi Devold. All rights reserved.</p>
    </footer>
  );
};

export default Footer;