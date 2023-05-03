import Icon from '@components/Icon';
import type { Meta } from '@storybook/react';

import IconButton from '.';

export default {
  title: 'Components/IconButton',
  component: IconButton
} as Meta<typeof IconButton>;

const Template = function Template(args) {
  return (
    <IconButton {...args}>
      <Icon name="CaretSemiRightOutlined" color="primary" />
    </IconButton>
  );
};

export const Default = Template.bind({});
Default.args = {
  // eslint-disable-next-line no-alert
  onClick: () => alert('click')
};
