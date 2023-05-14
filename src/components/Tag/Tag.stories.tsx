import Icon from '@components/Icon';

import { Meta, StoryObj } from '@storybook/react';

import Tag from '.';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: (args) => <Tag {...args}>Tag</Tag>
};

export const WithStartIcon: Story = {
  render: (args) => (
    <Tag {...args} startIcon={<Icon name="CaretSemiRightOutlined" />}>
      Tag
    </Tag>
  )
};
