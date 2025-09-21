import React from 'react';
import './styles/Button.css';
import resumeImage from '../assets/resume.png'; // Import the image

const Resume = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1zUEoqpturY7Gwuc11BhUJu1kszxPx8D_/view?usp=drive_link', '_blank');
  };

  return (
    <div className='bg-black text-white py-20' id='resume'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center'>
        <h2 className='text-4xl font-bold text-center mb-12'>Resume</h2>
        <img src={resumeImage} alt="Resume" className='mb-8 w-50 max-w-sm rounded' /> 
        <p className='text-center mb-8'>Download my resume to learn more about my work experience and skills.</p>
        {/* From Uiverse.io by KINGFRESS  */}
          <button className="button" onClick={handleDownload}>
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Download</span>
          </button>
      </div>
    </div>
  );
};

export default Resume;