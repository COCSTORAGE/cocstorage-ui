import { useEffect, useState } from 'react';

import type { Meta } from '@storybook/react';

import Radio from '.';

export default {
  title: 'Components/Radio',
  component: Radio
} as Meta<typeof Radio>;

const Template = function Template(args) {
  const [checked, setChecked] = useState<boolean | undefined>(false);

  const handleChange = () => setChecked(true);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setChecked(args.checked);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.checked]);

  return <Radio {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false
};
