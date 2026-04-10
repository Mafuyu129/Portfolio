import { useEffect } from 'react';

export const useReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-up');
    
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);
};
