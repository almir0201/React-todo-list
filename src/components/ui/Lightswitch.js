import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';

export const Lightswitch = () => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <button type="button" onClick={toggleTheme}>
      <img src={isDark ? `../lightswitch-off.png` : `../lightswitch-on.png`} />
    </button>
  );
};
