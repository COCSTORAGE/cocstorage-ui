import { PropsWithChildren, useMemo } from 'react';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { dark } from '@theme/dark';

import { light } from '@theme/light';

import ThemeContext from '@theme/provider/ThemeContext';

import GlobalStyles from '@theme/utils/GlobalStyles';

import { ThemeType } from '../../types';

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
