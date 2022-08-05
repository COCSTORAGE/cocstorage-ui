import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = function Template(args) {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  width: 50,
  height: 50,
  src: 'https://static.cocstorage.com/icons/hotlink-ok/internetcast.png',
  alt: 'Avatar Img'
};
