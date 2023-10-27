import { RefAttributes, useEffect, useState } from 'react';

import Button from '@components/Button';

import { Meta, StoryObj } from '@storybook/react';

import Tooltip, { TooltipProps } from '.';

const meta: Meta<typeof Tooltip> = {
  title: 'Experiment/Tooltip',
  component: Tooltip
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

function TooltipWithHooks(args: TooltipProps & RefAttributes<HTMLDivElement>) {
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
      <Button onClick={handleClick}>Open Tooltip</Button>
    </Tooltip>
  );
}

export const Default: Story = {
  render: (args) => <TooltipWithHooks {...args} />
};
