import { RefAttributes } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import useTheme from '@theme/hooks/useTheme';

import Flexbox, { FlexboxProps } from '.';

const meta: Meta<typeof Flexbox> = {
  title: 'Components/Flexbox',
  component: Flexbox
};

export default meta;
type Story = StoryObj<typeof Flexbox>;

function FlexboxWithHooks(args: FlexboxProps & RefAttributes<HTMLDivElement>) {
  const {
    theme: {
      palette: { box }
    }
  } = useTheme();

  const style = {
    padding: 10,
    backgroundColor: box.filled.normal
  };

  return (
    <Flexbox {...args}>
      <div style={style}>Item1</div>
      <div style={style}>Item2</div>
      <div style={style}>Item3</div>
      <div style={style}>Item4</div>
      <div style={style}>Item5</div>
    </Flexbox>
  );
}

export const Default: Story = {
  render: (args) => <FlexboxWithHooks {...args} />
};
