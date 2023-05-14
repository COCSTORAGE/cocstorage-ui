import { RefAttributes, useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Dropdown, { DropdownProps } from '.';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

function DropdownWithHooks(args: DropdownProps & RefAttributes<HTMLButtonElement>) {
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
    if (args.options) setOptions(args.options);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.options]);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    if (args.value) setValue(args.value);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.value]);

  const handleChange = (newValue: string | number) => setValue(newValue);

  return <Dropdown {...args} options={options} value={value} onChange={handleChange} />;
}

export const Default: Story = {
  render: (args) => <DropdownWithHooks {...args} />
};
