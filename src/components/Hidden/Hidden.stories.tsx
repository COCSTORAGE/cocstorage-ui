import Button from '@components/Button';

import { Meta, StoryObj } from '@storybook/react';

import Hidden from '.';

const meta: Meta<typeof Hidden> = {
  title: 'Components/Hidden',
  component: Hidden
};

export default meta;
type Story = StoryObj<typeof Hidden>;

export const Default: Story = {
  render: (args) => (
    <Hidden {...args}>
      <Button>Button</Button>
    </Hidden>
  )
};
