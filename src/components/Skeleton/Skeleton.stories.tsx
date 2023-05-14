import { Meta, StoryObj } from '@storybook/react';

import Skeleton from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => <Skeleton {...args} width={150} height={30} disableAspectRatio />
};
