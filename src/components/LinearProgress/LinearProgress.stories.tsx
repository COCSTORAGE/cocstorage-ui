import type { ComponentMeta, ComponentStory } from '@storybook/react';

import LinearProgress from '.';

export default {
  title: 'Components/LinearProgress',
  component: LinearProgress
} as ComponentMeta<typeof LinearProgress>;

const Template: ComponentStory<typeof LinearProgress> = function Template(args) {
  return <LinearProgress {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 25
};
