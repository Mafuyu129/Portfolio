import { useEffect } from 'react';

export const useReveal = () => {
  useEffect(() => {
    const observeElements = () => {
      const revealElements = document.querySelectorAll('.reveal-up:not(.revealed)');
      revealElements.forEach(el => revealObserver.observe(el));
    };

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

    // Initial observation
    observeElements();

    // Watch for new elements being added to the DOM (like "Show All Badges")
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
