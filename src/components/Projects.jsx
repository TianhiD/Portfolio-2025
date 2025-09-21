import React from 'react';
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
    image: 'https://via.placeholder.com/600x400',
    title: 'ArtVista',
    description: 'An app to explore and discover artworks from various artists around the world. Built with React Native, Swift, and Firebase.',
    demoLink: '#',
    codeLink: 'https://github.com/TianhiD/ArtVista-App'
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Shortly',
    description: 'Landing page of an app that allows shortening URLs. Made with React Hooks, sessionStorage and REST API',
    demoLink: '#',
    codeLink: '#'
  }
];

const artData = [
  {
    image: artImg1,
    title: 'Art 1',
    description: 'Description of Art 1',
  },
  {
    image: artImg6,
    title: 'Art 2',
    description: 'Description of Art 2',
  },
  {
    image: artImg3,
    title: 'Art 3',
    description: 'Description of Art 3',
  },
  {
    image: artImg4,
    title: 'Art 4',
    description: 'Description of Art 4',
  },
  {
    image: artImg5,
    title: 'Art 5',
    description: 'Description of Art 5',
  },
  {
    image: artImg2,
    title: 'Art 6',
    description: 'Description of Art 6',
  }
];

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-3'>Projects</h2>
        <div className='projects-section'>
          <div className='container'>
            <h3 className='text-2xl font-bold text-center mb-12'>Last Projects</h3>
            <div className='projects-grid'>
              {projectData.map((project, index) => (
                <div key={index} className='project-card'>
                  <img src={project.image} alt={project.title} className='project-image' />
                  <div className='project-info'>
                    <p>{project.description}</p>
                    <div className='project-buttons'>
                      <a href={project.demoLink} className='btn btn-demo'>Demo</a>
                      <a href={project.codeLink} className='btn btn-code'>Code</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> 
        </div>
        <h3 className='text-2xl font-bold text-center mb-12'>ArtWork</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {artData.map((art, index) => (
            <ArtCard
              key={index}
              image={art.image}
              title={art.title}
              description={art.description}
            />
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Projects;