import ThemeProvider from '../src/theme/provider/ThemeProvider';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const argTypes = { darkMode: { control: 'boolean' }, customStyle: { control: false } };

// The default value of the theme arg to all stories
export const args = { darkMode: false };

export const decorators = [
  (Story, { args: { darkMode } }) => (
    <ThemeProvider theme={darkMode ? 'dark' : 'light'}>
      <Story />
    </ThemeProvider>
  )
];
