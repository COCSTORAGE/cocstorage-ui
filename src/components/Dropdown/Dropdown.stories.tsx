import { useEffect, useState } from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Dropdown from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = function Template(args) {
  const [options, setOptions] = useState<
    Array<{
      name: string;
      value: string | number;
    }>
  >([
    {
      name: 'Option1',
      value: 'Option1'
    },
    {
      name: 'Option2',
      value: 'Option2'
    }
  ]);
  const [value, setValue] = useState<string | number>('Option1');

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setOptions(args.options);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.options]);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setValue(args.value);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.value]);

  const handleChange = (newValue: string | number) => setValue(newValue);

  return <Dropdown {...args} options={options} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      name: 'Option1',
      value: 'Option1'
    },
    {
      name: 'Option2',
      value: 'Option2'
    }
  ],
  value: 'Option1'
};
