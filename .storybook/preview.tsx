import type { Preview } from '@storybook/react';
import ThemeProvider from '../src/theme/provider/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export const argTypes = { darkMode: { control: 'boolean' }, customStyle: { control: false } };

export const args = { darkMode: false };

export const decorators = [
  (Story, { args: { darkMode } }) => (
    <ThemeProvider theme={darkMode ? 'dark' : 'light'}>
      <Story />
    </ThemeProvider>
  )
];

export default preview;
