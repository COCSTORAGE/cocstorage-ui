import { Meta, StoryObj } from '@storybook/react';

import Avatar from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => <Avatar {...args} />
};

export const Fallback: Story = {
  render: (args) => (
    <Avatar
      {...args}
      width={50}
      height={50}
      fallback={{
        width: 24,
        height: 24
      }}
    />
  )
};
