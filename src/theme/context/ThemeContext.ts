import { createContext } from 'react';

import { ThemeMode } from '@typings';

const ThemeContext = createContext<ThemeMode>('light');

export default ThemeContext;
