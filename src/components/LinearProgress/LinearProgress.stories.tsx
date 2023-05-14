import { Meta, StoryObj } from '@storybook/react';

import LinearProgress from '.';

const meta: Meta<typeof LinearProgress> = {
  title: 'Components/LinearProgress',
  component: LinearProgress
};

export default meta;
type Story = StoryObj<typeof LinearProgress>;

export const Default: Story = {
  render: (args) => <LinearProgress {...args} />
};
