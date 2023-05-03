import type { Meta } from '@storybook/react';

import useTheme from '@theme/provider/useTheme';

import Box from '.';

export default {
  title: 'Components/Box',
  component: Box
} as Meta<typeof Box>;

const Template = function Template(args) {
  const {
    theme: {
      palette: { box }
    }
  } = useTheme();
  const style = {
    padding: 10,
    backgroundColor: box.filled.normal
  };
  return (
    <Box {...args} style={style}>
      Box
    </Box>
  );
};

export const Default = Template.bind({});
