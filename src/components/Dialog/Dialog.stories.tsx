import { RefAttributes, useEffect, useState } from 'react';

import Button from '@components/Button';

import Flexbox from '@components/Flexbox';
import { Meta, StoryObj } from '@storybook/react';

import Dialog, { DialogProps } from '.';

const meta: Meta<typeof Dialog> = {
  title: 'Experiment/Dialog',
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

function WithQueue(args: DialogProps & RefAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);
  const [openThirdDialog, setOpenThirdDialog] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenSecondDialog = () => {
    setOpen(false);
    setOpenSecondDialog(true);
  };

  const handleCloseSecondDialog = () => setOpenSecondDialog(false);

  const handleOpenThirdDialog = () => {
    setOpenSecondDialog(false);
    setOpenThirdDialog(true);
  };

  const handleCloseThirdDialog = () => setOpenThirdDialog(false);

  const handleOpenAll = () => {
    setOpen(true);
    setOpenSecondDialog(true);
    setOpenThirdDialog(true);
  };

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setOpen(args.open);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.open]);

  return (
    <>
      <Flexbox gap={8} alignment="center">
        <Button variant="accent" onClick={handleOpen}>
          Open Dialog
        </Button>
        <Button variant="accent" onClick={handleOpenSecondDialog}>
          Open Second Dialog
        </Button>
        <Button variant="accent" onClick={handleOpenThirdDialog}>
          Open Third Dialog
        </Button>
        <Button variant="accent" onClick={handleOpenAll}>
          Open All
        </Button>
      </Flexbox>
      <Dialog {...args} open={open} onClose={handleClose}>
        <Button onClick={handleOpenSecondDialog}>Open Second Dialog</Button>
      </Dialog>
      <Dialog open={openSecondDialog} onClose={handleCloseSecondDialog}>
        <Button onClick={handleOpenThirdDialog}>Open Third Dialog</Button>
      </Dialog>
      <Dialog open={openThirdDialog} onClose={handleCloseThirdDialog}>
        <Button onClick={handleCloseThirdDialog}>Close Third Dialog</Button>
      </Dialog>
    </>
  );
}

export const Default: Story = {
  render: (args) => <DialogWithHooks {...args} />
};

export const Queue: Story = {
  render: (args) => <WithQueue {...args} />
};
