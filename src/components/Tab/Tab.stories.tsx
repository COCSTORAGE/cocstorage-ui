import { Meta, StoryObj } from '@storybook/react';

import Tab from '.';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: (args) => <Tab {...args} text="Tab" value="Tab" className="selected" />
};
