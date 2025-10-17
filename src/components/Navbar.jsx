import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-900 bg-opacity-40 backdrop-blur-md shadow-lg'
          : 'bg-zinc-900 bg-opacity-100'
      }`}
      style={{ height: '80px', paddingTop: '10px', paddingBottom: '10px' }}
    >
      <div className="container mx-auto px-4 md:px-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-white hover:text-green-300 transition-colors duration-300">
          Tianhi Devold
        </div>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          className="md:hidden text-white text-2xl p-2 rounded hover:bg-white/5 transition"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {/* simple icon */}
          <span className="sr-only">Menu</span>
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Menu: stacked on mobile, inline on md+ */}
        <div
          id="primary-navigation"
          className={`absolute left-0 top-20 w-full md:static md:w-auto transition-all duration-200 ${
            isOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <div className="bg-zinc-900/95 md:bg-transparent md:flex md:items-center md:space-x-6 py-4 md:py-0">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About me' },
              { href: '#projects', label: 'Projects' },
              { href: '#resume', label: 'Resume' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center md:inline md:w-auto font-mono font-bold text-lg text-white hover:text-green-300 transition-colors duration-300 py-3 md:py-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;