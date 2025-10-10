import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './styles/Projects.css';
import projectImg1 from '../assets/artvista.png';
import ArtCard from './ArtCard.jsx';
import artImg1 from '../assets/Devold_Tianhi_poster_A2.jpg';
import artImg2 from '../assets/Devold_Tianhi_A1.jpg';
import artImg3 from '../assets/magazine.png';
import artImg4 from '../assets/multime.png';
import artImg5 from '../assets/pamplet.png';
import artImg6 from '../assets/doubleexposure.png';

const projectData = [
  {
    image: projectImg1,
    title: 'ArtVista',
    description:
      'An app to explore and discover artworks from various artists around the world. Built with React Native, Swift, and Firebase.',
    demoLink: '#',
    codeLink: 'https://github.com/TianhiD/ArtVista-App',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Shortly',
    description:
      'Landing page of an app that allows shortening URLs. Made with React Hooks, sessionStorage and REST API',
    demoLink: '#',
    codeLink: '#',
  },
];

const artData = [
  { image: artImg1, title: 'Art 1', description: 'Description of Art 1' },
  { image: artImg6, title: 'Art 2', description: 'Description of Art 2' },
  { image: artImg3, title: 'Art 3', description: 'Description of Art 3' },
  { image: artImg4, title: 'Art 4', description: 'Description of Art 4' },
  { image: artImg5, title: 'Art 5', description: 'Description of Art 5' },
  { image: artImg2, title: 'Art 6', description: 'Description of Art 6' },
];

const Projects = () => {
  const [showArt, setShowArt] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  // Base animation for fade + slide
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='bg-zinc-900 text-white py-20' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24' ref={sectionRef}>
        {/* Header */}
        <motion.h2
          className='text-4xl font-bold text-center mb-8'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          Latest Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className='projects-section'>
          <div className='container'>
            <div className='projects-grid'>
              {projectData.map((project, index) => (
                <motion.div
                  key={index}
                  className='project-card'
                  variants={fadeUp}
                  initial='hidden'
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className='project-image'
                  />
                  <div className='project-info'>
                    <p>{project.description}</p>
                    <div className='project-buttons'>
                      <a
                        href={project.demoLink}
                        className='btn btn-demo'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Demo
                      </a>
                      <a
                        href={project.codeLink}
                        className='btn btn-code'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Artwork Dropdown */}
        <motion.div
          className='flex flex-col items-center mt-12'
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <button
            className='w-full md:w-auto bg-emerald-600 text-white font-bold py-2 px-4 rounded mb-4 transition hover:bg-emerald-700'
            onClick={() => setShowArt(!showArt)}
          >
            {showArt ? 'Hide Artwork ▲' : 'Show Artwork ▼'}
          </button>

          {showArt && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className='w-full'
            >
              <p className='text-center mb-6'>
                A collection of some of my graphic designs.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {artData.map((art, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <ArtCard
                      image={art.image}
                      title={art.title}
                      description={art.description}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
