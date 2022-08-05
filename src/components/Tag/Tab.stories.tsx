import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from '../Icon';

import Tag from '.';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    startIcon: {
      control: false
    }
  }
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = function Template(args) {
  return <Tag {...args}>Tag</Tag>;
};

export const Default = Template.bind({});
Default.args = {
  variant: 'text'
};
Default.argTypes = {
  iconOnly: {
    control: false
  }
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  variant: 'text',
  startIcon: <Icon name="WriteOutlined" />
};
