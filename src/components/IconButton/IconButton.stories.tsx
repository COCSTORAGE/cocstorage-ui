import Icon from '@components/Icon';

import { Meta, StoryObj } from '@storybook/react';

import IconButton from '.';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: (args) => (
    <IconButton {...args}>
      <Icon name="CaretSemiRightOutlined" color="primary" />
    </IconButton>
  )
};
