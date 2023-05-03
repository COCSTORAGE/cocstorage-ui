import Button from '@components/Button';
import type { Meta } from '@storybook/react';

import Hidden from '.';

export default {
  title: 'Experiment/Hidden',
  component: Hidden
} as Meta<typeof Hidden>;

const Template = function Template(args) {
  return (
    <Hidden {...args}>
      <Button>Button</Button>
    </Hidden>
  );
};

export const Default = Template.bind({});
