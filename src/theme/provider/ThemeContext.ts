import { createContext } from 'react';

import { ThemeMode } from '@types';

const ThemeContext = createContext<ThemeMode>('light');

export default ThemeContext;
