import { PropsWithChildren } from 'react';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import ThemeContext from '@theme/context/ThemeContext';

import { dark } from '@theme/dark';
import { light } from '@theme/light';
import OverlayProvider from '@theme/provider/OverlayProvider';
import GlobalStyles from '@theme/utils/GlobalStyles';

import { ThemeMode } from '@typings';

export interface ThemeProviderProps {
  theme: ThemeMode;
  globalStyles?: boolean;
}

function ThemeProvider({
  children,
  theme,
  globalStyles = true
}: PropsWithChildren<ThemeProviderProps>) {
  const cocTheme = theme === 'light' ? light : dark;

  return (
    <ThemeContext.Provider value={theme}>
      {globalStyles && <GlobalStyles />}
      <EmotionThemeProvider theme={cocTheme}>
        <OverlayProvider>{children}</OverlayProvider>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
