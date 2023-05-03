import type { Meta } from '@storybook/react';

import Typography from '.';

export default {
  title: 'Components/Typography',
  component: Typography
} as Meta<typeof Typography>;

const Template = function Template(args) {
  return <Typography {...args}>Typography</Typography>;
};

export const Default = Template.bind({});
Default.args = {
  variant: 'p2',
  fontWeight: 'regular'
};
