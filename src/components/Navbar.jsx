import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar = ({ theme, toggleTheme }) => {

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoText, setLogoText] = useState('KC');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fullText = 'Kasidech';
    let currentIndex = 2; // Start from "KC"
    let isDeleting = false;
    let typingSpeed = 150; // Requested typing speed

    const type = () => {
      setLogoText((prev) => {
        if (!isDeleting) {
          // Typing forwards
          if (prev.length < fullText.length) {
            typingSpeed = 150; // Requested typing speed
            return fullText.slice(0, prev.length + 1);
          } else {
            // Finished typing full name, pause then delete
            isDeleting = true;
            typingSpeed = 600; 
            return prev;
          }
        } else {
          // Deleting back to "KC"
          if (prev.length > 2) {
            typingSpeed = 75; // Requested deleting speed
            return prev.slice(0, -1);
          } else {
            // Back to initials, pause then restart
            isDeleting = false;
            typingSpeed = 2000; 
            return prev;
          }
        }
      });

      timeoutId = setTimeout(type, typingSpeed);
    };

    let timeoutId = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, []);



  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">{logoText}</span>
          <span className="logo-cursor">|</span>
          <span className="logo-bracket">/&gt;</span>
        </a>
        
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>


        <div className="nav-actions">
          <button 
            className="nav-search"
            onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search</span>
            <kbd>⌘K</kbd>
          </button>

          
          <button 
            id="themeToggle" 
            className="theme-toggle" 
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <svg className="sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg className="moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <button 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
            id="navToggle" 
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Nav toggle bars are handled via CSS */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
