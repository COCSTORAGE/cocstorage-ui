import Icon from '@components/Icon';
import type { Meta } from '@storybook/react';

import Tag from '.';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    startIcon: {
      control: false
    }
  }
} as Meta<typeof Tag>;

const Template = function Template(args) {
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
  startIcon: <Icon name="CaretSemiRightOutlined" />
};
