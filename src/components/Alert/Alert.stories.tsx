import Icon from '@components/Icon';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Alert from '.';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    icon: {
      control: false
    },
    action: {
      control: false
    }
  }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = function Template(args) {
  return <Alert {...args}>Alert</Alert>;
};

export const Default = Template.bind({});
Default.args = {
  severity: 'normal'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  severity: 'normal',
  icon: <Icon name="CaretSemiLeftOutlined" />
};

export const WithAction = Template.bind({});
WithAction.args = {
  severity: 'normal',
  // eslint-disable-next-line no-alert
  action: <Icon name="CaretSemiRightOutlined" onClick={() => alert('action')} />
};
