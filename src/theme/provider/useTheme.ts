import { useMemo, useContext } from 'react';
import { light } from '@theme/light';
import { dark } from '@theme/dark';

import ThemeContext from './ThemeContext';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  const theme = useMemo(() => (themeContext === 'dark' ? dark : light), [themeContext]);

  return {
    theme
  };
}

export default useTheme;
