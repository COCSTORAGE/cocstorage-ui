import React, { PropsWithChildren } from 'react';
import ThemeContext from '@theme/useTheme/ThemeContext';
import { ThemeType } from '../types';

export interface ThemeProviderProps {
  theme: ThemeType;
}

function ThemeProvider({ children, theme }: PropsWithChildren<ThemeProviderProps>) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
