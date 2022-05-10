import { PropsWithChildren, useMemo } from 'react';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { dark } from '@theme/dark';
import { light } from '@theme/light';

import { ThemeType } from '../../types';
import ThemeContext from './ThemeContext';

export interface ThemeProviderProps {
  theme: ThemeType;
}

function ThemeProvider({ children, theme }: PropsWithChildren<ThemeProviderProps>) {
  const cocTheme = useMemo(() => (theme === 'light' ? light : dark), [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <EmotionThemeProvider theme={cocTheme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
