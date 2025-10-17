import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './styles/Projects.css';
import projectImg1 from '../assets/ArtvistaImg.png';
import projectImg2 from '../assets/Android.png';
import ArtCard from './ArtCard.jsx';
import artImg1 from '../assets/Devold_Tianhi_poster_A2.jpg';
import artImg2 from '../assets/Devold_Tianhi_A1.jpg';
import artImg3 from '../assets/magazine.png';
import artImg4 from '../assets/multime.png';
import artImg5 from '../assets/pamplet.png';
import artImg6 from '../assets/doubleexposure.png';
import artImg7 from '../assets/card.png';
import artImg8 from '../assets/projectLogo.png';
import { image } from 'framer-motion/client';

const projectData = [
  {
    image: projectImg1,
    title: 'ArtVista',
    description:
      'An app to explore and discover artworks from various artists around the world. Built with React Native, Swift, and Firebase.',
    codeLink: 'https://github.com/TianhiD/ArtVista-App',
  },
  {
    image: projectImg2,
    title: 'Clothing App',
    description:
      'An Android clothing app that allows users to browse and purchase clothing items in app history. Built with Kotlin.',
    codeLink: 'https://github.com/TianhiD/AndroidClothingApp/tree/main',
  },
];

const artData = [
  { image: artImg1, title: 'Announcement poster', description: 'This is my second project in photoshop where I utilize guides, different color modes and layer organization. ' },
  { image: artImg6, title: 'Double exposure', description: 'This is my fourth photoshop project where I learned how to use layer masks and clipping masks to combine landscape and portrait images. ' },
  { image: artImg3, title: 'Magazine', description: 'This is my second inDesign project where I have created a magazine with page layout, color, design and a clear theme. ' },
  { image: artImg7, title: 'Business Card', description: 'This is my first project in illustrator where I have created a business card with layout composition and design in mind. ' },
  { image: artImg8, title: 'Logo Design', description: 'This is my first project in illustrator where I have created a logo for a fictional company called ArtVista. ' },
  { image: artImg4, title: 'Multi-Me Composite', description: 'This is my third project in photoshop where I utilize layer masks on multiple images of my self. ' },
  { image: artImg5, title: 'Pamphlet', description: 'This is my first inDesign project where I have created a pamphlet with layout composition and design in mind. ' },
  { image: artImg2, title: 'Layers + masks', description: 'This is my first project in photoshop where I use layer mask to create the illusion of the image overlapping the text.' },
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
    <div className='bg-orange-50 text-sky-950 py-20' id='projects'>
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
          <div className='container '>
            <div className='projects-grid grid grid-cols-1 md:grid-cols-2 gap-8'>
              {projectData.map((project, index) => (
                <motion.div
                  key={index}
                  className='project-card bg-orange-50 text-sky-950 rounded-lg overflow-hidden shadow-lg p-6 transition-transform hover:scale-[1.02] border border-zinc-200'
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
                    className='project-image rounded-md mb-4 object-cover w-full h-48'
                  />
                  <div className='project-info'>
                    <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                    <p className='text-sm mb-4'>{project.description}</p>
                    <div className='project-buttons'>
                      <a
                        href={project.codeLink}
                        className='inline-block px-4 py-2 bg-sky-950 text-white rounded-md text-sm shadow hover:opacity-90 transition'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View Code
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className='bg-orange-50 rounded-lg shadow-lg border border-zinc-200 overflow-hidden'
                  >
                    <div className='p-4'>
                      <ArtCard
                        image={art.image}
                        title={art.title}
                        description={art.description}
                      />
                    </div>
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