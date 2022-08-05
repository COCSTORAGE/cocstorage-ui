import type { ComponentMeta, ComponentStory } from '@storybook/react';

import useTheme from '../../theme/provider/useTheme';

import Flexbox from '.';

export default {
  title: 'Experiment/Flexbox',
  component: Flexbox
} as ComponentMeta<typeof Flexbox>;

const Template: ComponentStory<typeof Flexbox> = function Template(args) {
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
};

export const Default = Template.bind({});
Default.args = {
  direction: 'horizontal'
};
