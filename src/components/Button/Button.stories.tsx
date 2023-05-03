import Icon from '@components/Icon';
import type { Meta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    startIcon: {
      control: false
    },
    endIcon: {
      control: false
    }
  }
} as Meta<typeof Button>;

const Template = function Template(args) {
  return <Button {...args}>Button</Button>;
};

export const Default = Template.bind({});
Default.args = {
  variant: 'text',
  size: 'medium',
  color: 'primary'
};
Default.argTypes = {
  iconOnly: {
    control: false
  }
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  variant: 'text',
  size: 'medium',
  color: 'primary',
  startIcon: <Icon name="CaretSemiLeftOutlined" />
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  variant: 'text',
  size: 'medium',
  color: 'primary',
  endIcon: <Icon name="CaretSemiRightOutlined" />
};
