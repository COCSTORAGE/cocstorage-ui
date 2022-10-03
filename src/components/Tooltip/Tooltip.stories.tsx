import { useEffect, useState } from 'react';

import Button from '@components/Button';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Tooltip from '.';

export default {
  title: 'Experiment/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = function Template(args) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setOpen(args.open);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.open]);

  return (
    <Tooltip {...args} open={open} onClose={handleClose} content="Tooltip">
      <Button onClick={handleClick}>Tooltip Open</Button>
    </Tooltip>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'accent',
  placement: 'bottom'
};
