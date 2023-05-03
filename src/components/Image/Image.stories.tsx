import type { Meta } from '@storybook/react';

import Image from '.';

export default {
  title: 'Experiment/Image',
  component: Image,
  argTypes: {
    fallback: {
      control: false
    }
  }
} as Meta<typeof Image>;

const Template = function Template(args) {
  return <Image {...args} />;
};

export const Default = Template.bind({});
export const Fallback = Template.bind({});
Default.args = {
  width: 150,
  height: 150,
  src: 'https://static.cocstorage.com/icons/hotlink-ok/internetcast.png',
  alt: 'Image Img',
  disableAspectRatio: true
};
Fallback.args = {
  width: 150,
  height: 150,
  disableAspectRatio: true,
  fallback: {
    width: 24,
    height: 24
  }
};
