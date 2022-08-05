import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from '../Icon';

import IconButton from './Index';

export default {
  title: 'Components/IconButton',
  component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = function Template(args) {
  return (
    <IconButton {...args}>
      <Icon name="CommunityFilled" color="primary" />
    </IconButton>
  );
};

export const Default = Template.bind({});
Default.args = {
  // eslint-disable-next-line no-alert
  onClick: () => alert('click')
};
