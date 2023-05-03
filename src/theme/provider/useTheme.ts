import { useContext, useMemo } from 'react';

import ThemeContext from './ThemeContext';
import { dark } from '../dark';
import { light } from '../light';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  const theme = useMemo(() => (themeContext === 'dark' ? dark : light), [themeContext]);

  return {
    theme
  };
}

export default useTheme;
