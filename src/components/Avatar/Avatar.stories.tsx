import type { Meta } from '@storybook/react';

import Avatar from '.';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    width: {
      control: 'number'
    },
    height: {
      control: 'number'
    }
  }
} as Meta<typeof Avatar>;

const Template = function Template(args) {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
export const Fallback = Template.bind({});
Default.args = {
  width: 50,
  height: 50,
  src: 'https://static.cocstorage.com/icons/hotlink-ok/internetcast.png',
  alt: 'Avatar Img'
};
Fallback.args = {
  width: 50,
  height: 50,
  fallback: {
    width: 24,
    height: 24
  }
};
