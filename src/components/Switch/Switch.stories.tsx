import { useEffect, useState } from 'react';

import type { Meta } from '@storybook/react';

import Switch from '.';

export default {
  title: 'Components/Switch',
  component: Switch
} as Meta<typeof Switch>;

const Template = function Template(args) {
  const [checked, setChecked] = useState<boolean | undefined>(false);

  const handleChange = () => setChecked(!checked);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setChecked(args.checked);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.checked]);

  return <Switch {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
