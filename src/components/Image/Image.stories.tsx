import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Image from '.';

export default {
  title: 'Experiment/Image',
  component: Image,
  argTypes: {
    fallback: {
      control: false
    }
  }
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = function Template(args) {
  return <Image {...args} />;
};

export const Default = Template.bind({});
export const Fallback = Template.bind({});
Default.args = {
  width: 150,
  height: 150,
  src: 'https://static.cocstorage.com/icons/hotlink-ok/internetcast.png',
  alt: 'Image Img'
};
Fallback.args = {
  width: 150,
  height: 150,
  fallback: {
    iconName: 'UserFilled',
    width: 24,
    height: 24
  }
};
