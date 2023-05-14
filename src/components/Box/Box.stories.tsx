import { RefAttributes } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import useTheme from '@theme/provider/useTheme';

import Box, { BoxProps } from '.';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box
};

export default meta;
type Story = StoryObj<typeof Box>;

function BoxWithHooks(args: BoxProps & RefAttributes<HTMLDivElement>) {
  const {
    theme: {
      palette: { box }
    }
  } = useTheme();

  return (
    <Box
      {...args}
      customStyle={{
        padding: 10,
        backgroundColor: box.filled.normal
      }}
    >
      Box
    </Box>
  );
}

export const Default: Story = {
  render: (args) => <BoxWithHooks {...args} />
};
