import Icon from '@components/Icon';

import { Meta, StoryObj } from '@storybook/react';

import Badge from '.';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => <Badge {...args}>NEW</Badge>
};

export const WithStartIcon: Story = {
  render: (args) => (
    <Badge {...args} icon={<Icon name="ArrowDropUpSpecify_12_12" />}>
      NEW
    </Badge>
  )
};
