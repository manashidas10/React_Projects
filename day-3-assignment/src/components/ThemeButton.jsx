import React, { useState } from 'react';
import styles from './ThemeButton.module.css';

export default function ThemeButton() {
  const [theme, setTheme] = useState('Light');

  const handleToggle = () => {
    setTheme(prev => (prev === 'Light' ? 'Dark' : 'Light'));
  };

  const themeClass = theme === 'Light' ? styles.btnLight : styles.btnDark;

  return (
    <button 
      onClick={handleToggle} 
      className={`${styles.btnBase} ${themeClass}`}
    >
      {theme} Mode
    </button>
  );
}
