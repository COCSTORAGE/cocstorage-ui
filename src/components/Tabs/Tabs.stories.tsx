import { RefAttributes, useEffect, useState } from 'react';

import Tab from '@components/Tab';

import { Meta, StoryObj } from '@storybook/react';

import Tabs, { TabsProps } from '.';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs
};

export default meta;
type Story = StoryObj<typeof Tabs>;

function TabsWithHooks(args: TabsProps & RefAttributes<HTMLDivElement>) {
  const [value, setValue] = useState<string | number>('Tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setValue(args.value);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.value]);

  return (
    <Tabs {...args} value={value} onChange={handleChange}>
      <Tab text="Tab1" value="Tab1" />
      <Tab text="Tab2" value="Tab2" />
      <Tab text="Tab3" value="Tab3" />
    </Tabs>
  );
}

export const Default: Story = {
  render: (args) => <TabsWithHooks {...args} value="Tab1" />
};
