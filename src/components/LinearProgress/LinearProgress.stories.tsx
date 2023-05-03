import type { Meta } from '@storybook/react';

import LinearProgress from '.';

export default {
  title: 'Components/LinearProgress',
  component: LinearProgress
} as Meta<typeof LinearProgress>;

const Template = function Template(args) {
  return <LinearProgress {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 25
};
