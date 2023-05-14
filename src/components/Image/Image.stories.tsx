import { Meta, StoryObj } from '@storybook/react';

import Image from '.';

const meta: Meta<typeof Image> = {
  title: 'Experiment/Image',
  component: Image
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: (args) => (
    <Image
      {...args}
      width={150}
      height={150}
      src="https://static.cocstorage.com/icons/hotlink-ok/internetcast.png"
      alt="Image Img"
      disableAspectRatio
    />
  )
};

export const Fallback: Story = {
  render: (args) => (
    <Image
      {...args}
      width={150}
      height={150}
      alt="Image Img"
      fallback={{
        width: 24,
        height: 24
      }}
      disableAspectRatio
    />
  )
};
