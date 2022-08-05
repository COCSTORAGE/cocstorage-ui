import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Tab from '.';

export default {
  title: 'Components/Tab',
  component: Tab
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = function Template(args) {
  return <Tab {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: 'Tab',
  value: 'Tab',
  className: 'selected'
};
