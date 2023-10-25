import { useContext } from 'react';

import ThemeContext from '@theme/context/ThemeContext';
import { dark } from '@theme/dark';
import { light } from '@theme/light';

export default function useTheme() {
  const themeContext = useContext(ThemeContext);

  const theme = themeContext === 'dark' ? dark : light;

  return {
    theme
  };
}
