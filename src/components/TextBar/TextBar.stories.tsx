import { ChangeEvent, useEffect, useState } from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from '../Icon';

import TextBar from '.';

export default {
  title: 'Experiment/TextBar',
  component: TextBar,
  argTypes: {
    startIcon: {
      control: false
    }
  }
} as ComponentMeta<typeof TextBar>;

const Template: ComponentStory<typeof TextBar> = function Template(args) {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setValue(args.value);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.value]);

  return <TextBar {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  placeholder: 'TextBar'
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  size: 'medium',
  placeholder: 'TextBar',
  startIcon: <Icon name="CaretSemiLeftOutlined" />
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  size: 'medium',
  placeholder: 'TextBar',
  endIcon: <Icon name="CaretSemiRightOutlined" />
};
