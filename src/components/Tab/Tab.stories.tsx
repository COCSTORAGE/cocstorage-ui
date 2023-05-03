import type { Meta } from '@storybook/react';

import Tab from '.';

export default {
  title: 'Components/Tab',
  component: Tab
} as Meta<typeof Tab>;

const Template = function Template(args) {
  return <Tab {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: 'Tab',
  value: 'Tab',
  className: 'selected'
};
