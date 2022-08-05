import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Typography from '.';

export default {
  title: 'Experiment/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = function Template(args) {
  return <Typography {...args}>Typography</Typography>;
};

export const Default = Template.bind({});
