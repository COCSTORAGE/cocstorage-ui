import { RefAttributes, useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Radio, { RadioProps } from '.';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio
};

export default meta;
type Story = StoryObj<typeof Radio>;

function RadioWithHooks(args: RadioProps & RefAttributes<HTMLInputElement>) {
  const [checked, setChecked] = useState<boolean | undefined>(false);

  const handleChange = () => setChecked(true);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setChecked(args.checked);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.checked]);

  return <Radio {...args} checked={checked} onChange={handleChange} />;
}

export const Default: Story = {
  render: (args) => <RadioWithHooks {...args} />
};
