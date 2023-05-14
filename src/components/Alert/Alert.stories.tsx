import Icon from '@components/Icon';
import { Meta, StoryObj } from '@storybook/react';

import Alert from '.';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => <Alert {...args}>Alert</Alert>
};

export const WithIcon: Story = {
  render: (args) => (
    <Alert {...args} icon={<Icon name="CaretSemiLeftOutlined" />}>
      Alert
    </Alert>
  )
};

export const WithAction: Story = {
  render: (args) => (
    // eslint-disable-next-line no-alert
    <Alert {...args} action={<Icon name="CaretSemiLeftOutlined" onClick={() => alert('action')} />}>
      Alert
    </Alert>
  )
};
