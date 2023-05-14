import { useContext, useMemo } from 'react';

import { dark } from '@theme/dark';
import { light } from '@theme/light';

import ThemeContext from './ThemeContext';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  const theme = useMemo(() => (themeContext === 'dark' ? dark : light), [themeContext]);

  return {
    theme
  };
}

export default useTheme;
