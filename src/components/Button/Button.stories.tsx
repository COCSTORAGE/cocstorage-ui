import Icon from '@components/Icon';

import { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>
};

export const WithStartIcon: Story = {
  render: ({ endIcon, ...args }) => (
    <Button
      {...args}
      startIcon={<Icon name="CaretSemiLeftOutlined" />}
      endIcon={endIcon as undefined}
    >
      Button
    </Button>
  )
};

export const WithEndIcon: Story = {
  render: ({ startIcon, ...args }) => (
    <Button
      {...args}
      startIcon={startIcon as undefined}
      endIcon={<Icon name="CaretSemiRightOutlined" />}
    >
      Button
    </Button>
  )
};
