import { ChangeEvent, RefAttributes, useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Icon from '../Icon';

import TextBar, { TextBarProps } from '.';

const meta: Meta<typeof TextBar> = {
  title: 'Components/TextBar',
  component: TextBar
};

export default meta;
type Story = StoryObj<typeof TextBar>;

function TextBarWithHooks(args: TextBarProps & RefAttributes<HTMLInputElement>) {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setValue(args.value);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.value]);

  return <TextBar {...args} placeholder="TextBar" value={value} onChange={handleChange} />;
}

export const Default: Story = {
  render: (args) => <TextBarWithHooks {...args} />
};

export const WithStartIcon: Story = {
  render: (args) => <TextBarWithHooks {...args} startIcon={<Icon name="CaretSemiLeftOutlined" />} />
};

export const WithEndIcon: Story = {
  render: (args) => <TextBarWithHooks {...args} endIcon={<Icon name="CaretSemiRightOutlined" />} />
};
