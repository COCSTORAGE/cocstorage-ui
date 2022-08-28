import Icon from '@components/Icon';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Badge from '.';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    startIcon: {
      control: false
    }
  }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = function Template(args) {
  return <Badge {...args}>NEW</Badge>;
};

export const Default = Template.bind({});
Default.args = {
  severity: 'info'
};
Default.argTypes = {
  iconOnly: {
    control: false
  }
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  severity: 'info',
  startIcon: <Icon name="ArrowDropUpSpecify_12_12" />
};
