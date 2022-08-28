import Button from '@components/Button';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Hidden from '.';

export default {
  title: 'Experiment/Hidden',
  component: Hidden
} as ComponentMeta<typeof Hidden>;

const Template: ComponentStory<typeof Hidden> = function Template(args) {
  return (
    <Hidden {...args}>
      <Button>Button</Button>
    </Hidden>
  );
};

export const Default = Template.bind({});
