import React, { createContext, useState, useEffect,useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const initialTheme = localStorage.getItem('knit-kart-theme') || 'light';
    setTheme(initialTheme);
    const html = document.querySelector('html');
    html.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    const html = document.querySelector('html');
    html.classList.remove(theme);
    html.classList.add(newTheme);
    localStorage.setItem('knit-kart-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};