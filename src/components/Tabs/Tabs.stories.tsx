import { useEffect, useState } from 'react';

import Tab from '@components/Tab';
import type { Meta } from '@storybook/react';

import Tabs from '.';

export default {
  title: 'Components/Tabs',
  component: Tabs
} as Meta<typeof Tabs>;

const Template = function Template(args) {
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
};

export const Default = Template.bind({});
Default.args = {
  value: 'Tab1'
};
