import { useMemo, useContext } from 'react';
import { light, dark } from '@theme';

import ThemeContext from './ThemeContext';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  const theme = useMemo(() => {
    if (themeContext === 'dark') {
      return dark;
    }
    return light;
  }, [themeContext]);

  return {
    theme
  };
}

export default useTheme;
