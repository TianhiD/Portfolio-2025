import React from 'react';
import './styles/ContactBtn.css';

const Contact = () => {
  return (
    <div className='bg-orange-50 text-sky-950 py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact me</h2>
        <div className='flex flex-col items-center'>
          <p className='mb-8'></p>
          {/* From Uiverse.io by Mohammad-Rahme-576  */}
          <div className="tooltip-container">
            <div className="button-content">
              <span className="text">Connect with me</span>
              <svg
                className="share-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                ></path>
              </svg>
            </div>
            <div className="tooltip-content">
              <div className="social-icons">
                <a href="https://github.com/TianhiD" className="social-icon github" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.81 1.102.81 2.222v3.293c0 .32.218.694.825.576C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z"
                    ></path>
                  </svg>
                </a>
                <a href="mailto:tianhidevold@outlook.com?subject=Contact%20from%20Portfolio" className="social-icon email" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M12 12.713l11.985-7.99A1.5 1.5 0 0 0 22.5 3h-21a1.5 1.5 0 0 0-1.485 1.723L12 12.713zM12 14.287L.015 6.297A1.5 1.5 0 0 0 0 7.5v9a1.5 1.5 0 0 0 1.5 1.5h21a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-.015-.203L12 14.287z"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/tianhi-devold-071109169/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Contact;