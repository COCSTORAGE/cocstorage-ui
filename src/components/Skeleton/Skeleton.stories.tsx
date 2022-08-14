import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Skeleton from '.';

export default {
  title: 'Components/Skeleton',
  component: Skeleton
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = function Template(args) {
  return <Skeleton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  width: 100,
  height: 30,
  disableAspectRatio: true
};
