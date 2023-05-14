import { RefAttributes, useEffect, useState } from 'react';

import Button from '@components/Button';

import { Meta, StoryObj } from '@storybook/react';

import Dialog, { DialogProps } from '.';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog
};

export default meta;
type Story = StoryObj<typeof Dialog>;

function DialogWithHooks(args: DialogProps & RefAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setOpen(args.open);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.open]);

  return (
    <>
      <Button variant="accent" onClick={handleOpen}>
        Open Dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose}>
        <Button onClick={handleClose}>Close Dialog</Button>
      </Dialog>
    </>
  );
}

export const Default: Story = {
  render: (args) => <DialogWithHooks {...args} />
};
