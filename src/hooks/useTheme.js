import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setThemeState] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (theme === 'light') {
      htmlEl.setAttribute('data-theme', 'light');
    } else {
      htmlEl.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};
