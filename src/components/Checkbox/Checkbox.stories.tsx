import { RefAttributes, useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Checkbox, { CheckboxProps } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

function CheckboxWithHooks(args: CheckboxProps & RefAttributes<HTMLInputElement>) {
  const [checked, setChecked] = useState<boolean | undefined>(false);

  const handleChange = () => setChecked(!checked);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setChecked(args.checked);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.checked]);

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
}

export const Default: Story = {
  render: (args) => <CheckboxWithHooks {...args} />
};
