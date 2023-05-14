import { Meta, StoryObj } from '@storybook/react';

import Typography from '.';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: (args) => <Typography {...args}>Typography</Typography>
};
