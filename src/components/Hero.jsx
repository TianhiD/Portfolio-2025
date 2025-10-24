import React, { useState, useEffect } from 'react';
import heroImage from '../assets/Subject.png';

const subtitles = [
  'Full Stack Developer',
  'Open Source Enthusiast',
  'Tech Blogger',
  'UI/UX Explorer',
  'React & Vite Fan'
];

const Hero = () => {
  const [subtitle, setSubtitle] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [hoverImage, setHoverImage] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let timeout;
    if (typing) {
      if (subtitle.length < subtitles[subIndex].length) {
        timeout = setTimeout(() => {
          setSubtitle(subtitles[subIndex].slice(0, subtitle.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (subtitle.length > 0) {
        timeout = setTimeout(() => {
          setSubtitle(subtitle.slice(0, -1));
        }, 100);
      } else {
        setSubIndex((prev) => (prev + 1) % subtitles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [subtitle, typing, subIndex]);

  return (
    <div className="relative bg-orange-50 text-sky-950 text-center py-16 overflow-hidden" id="hero">

      {/* Animated background overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle, rgba(255,255,255,0.05) 2%, transparent 70%)] animate-[moveBackground 20s_linear_infinite]"
        style={{
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4">

        {/* Profile Image with hover and floating animation */}
        <img
          src={heroImage}
          alt="Tianhi Devold"
          className={`mx-auto mb-8 w-48 rounded-full object-cover shadow-lg cursor-pointer transition-transform duration-300 ${
            hoverImage ? 'transform scale-105 rotate-1' : ''
          } animate-[float_3s_ease-in-out_infinite]`}
          onMouseEnter={() => setHoverImage(true)}
          onMouseLeave={() => setHoverImage(false)}
        />

        {/* Title */}
        <h1 className="text-5xl font-extrabold pt-10">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent font-extrabold">
            Tianhi Devold
          </span>
        </h1>

        {/* Subtitle with blinking cursor */}
        <div className="mt-4 flex items-center justify-center space-x-2">
          <span className="text-lg font-mono text-emerald-400">{subtitle}</span>
          <span
            className="w-2 h-4 inline-block bg-white"
            style={{
              borderRight: '2px solid #3b3b3bff',
              animation: 'blink 1s step-start infinite'
            }}
          />
        </div>

        {/* Description */}
        <p className="text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          I love building modern web apps, sharing knowledge, and exploring new tech. Dive into my projects, read my blog, or get in touch!
        </p>

        
      </div>

      {/* Tailwind animations / keyframes */}
      <style jsx>{`
        @keyframes moveBackground {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 50px 50px;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        /* Tailwind custom animations (if Tailwind config allows) or inline @apply styles */
        /* Otherwise, in your tailwind.config.js, add these animations for reusability */
      `}</style>
    </div>
  );
};

export default Hero;