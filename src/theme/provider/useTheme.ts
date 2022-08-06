import { useContext, useMemo } from 'react';

import { dark } from '../dark';
import { light } from '../light';

import ThemeContext from './ThemeContext';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  const theme = useMemo(() => (themeContext === 'dark' ? dark : light), [themeContext]);

  return {
    theme
  };
}

export default useTheme;
