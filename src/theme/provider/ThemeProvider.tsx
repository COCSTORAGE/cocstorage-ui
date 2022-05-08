import React, { useMemo, PropsWithChildren } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { light } from '@theme/light';
import { dark } from '@theme/dark';

import ThemeContext from './ThemeContext';

import { ThemeType } from '../../types';

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
