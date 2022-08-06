import { PropsWithChildren, useMemo } from 'react';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { ThemeType } from '../../types';
import { dark } from '../dark';
import { light } from '../light';
import GlobalStyles from '../utils/GlobalStyles';

import ThemeContext from './ThemeContext';

export interface ThemeProviderProps {
  theme: ThemeType;
  globalStyles?: boolean;
}

function ThemeProvider({
  children,
  theme,
  globalStyles = true
}: PropsWithChildren<ThemeProviderProps>) {
  const cocTheme = useMemo(() => (theme === 'light' ? light : dark), [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      {globalStyles && <GlobalStyles />}
      <EmotionThemeProvider theme={cocTheme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
