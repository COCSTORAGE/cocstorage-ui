import { createContext } from 'react';

import { ThemeType } from '../../types';

const ThemeContext = createContext<ThemeType>('light');

export default ThemeContext;
