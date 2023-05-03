import type { Meta } from '@storybook/react';

import Skeleton from '.';

export default {
  title: 'Components/Skeleton',
  component: Skeleton
} as Meta<typeof Skeleton>;

const Template = function Template(args) {
  return <Skeleton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  width: 100,
  height: 30,
  disableAspectRatio: true
};
