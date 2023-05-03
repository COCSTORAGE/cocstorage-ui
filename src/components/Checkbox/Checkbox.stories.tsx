import { useEffect, useState } from 'react';

import type { Meta } from '@storybook/react';

import Checkbox from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
} as Meta<typeof Checkbox>;

const Template = function Template(args) {
  const [checked, setChecked] = useState<boolean | undefined>(false);

  const handleChange = () => setChecked(!checked);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setChecked(args.checked);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.checked]);

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false
};
