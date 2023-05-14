import { RefAttributes, useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Switch, { SwitchProps } from '.';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch
};

export default meta;
type Story = StoryObj<typeof Switch>;

function SwitchWithHooks(args: SwitchProps & RefAttributes<HTMLButtonElement>) {
  const [checked, setChecked] = useState<boolean | undefined>(false);

  const handleChange = () => setChecked(!checked);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setChecked(args.checked);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.checked]);

  return <Switch {...args} checked={checked} onChange={handleChange} />;
}

export const Default: Story = {
  render: (args) => <SwitchWithHooks {...args} />
};
