import { createContext } from 'react';

import { ThemeMode } from 'src/typings';

const ThemeContext = createContext<ThemeMode>('light');

export default ThemeContext;
