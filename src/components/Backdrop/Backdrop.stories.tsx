import { RefAttributes, useEffect, useState } from 'react';

import Button from '@components/Button';

import Flexbox from '@components/Flexbox';
import { Meta, StoryObj } from '@storybook/react';

import Backdrop, { BackdropProps } from '.';

const meta: Meta<typeof Backdrop> = {
  title: 'Experiment/Backdrop',
  component: Backdrop
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

function BackdropWithHooks(args: BackdropProps & RefAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setOpen(args.open);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.open]);

  return (
    <>
      <Button variant="accent" onClick={handleClick}>
        Backdrop Open
      </Button>
      <Backdrop {...args} open={open} onClose={handleClose}>
        <Button variant="accent" onClick={handleClose}>
          Backdrop Close
        </Button>
      </Backdrop>
    </>
  );
}

function WithQueue(args: BackdropProps & RefAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);
  const [openSecondBackdrop, setOpenSecondBackdrop] = useState(false);
  const [openThirdBackdrop, setOpenThirdBackdrop] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenSecondBackdrop = () => {
    setOpen(false);
    setOpenSecondBackdrop(true);
  };

  const handleCloseSecondBackdrop = () => setOpenSecondBackdrop(false);

  const handleOpenThirdBackdrop = () => {
    setOpenSecondBackdrop(false);
    setOpenThirdBackdrop(true);
  };

  const handleCloseThirdBackdrop = () => setOpenThirdBackdrop(false);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setOpen(args.open);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.open]);

  return (
    <>
      <Flexbox gap={8} alignment="center">
        <Button variant="accent" onClick={handleOpen}>
          Open Backdrop
        </Button>
        <Button variant="accent" onClick={handleOpenSecondBackdrop}>
          Open Second Backdrop
        </Button>
        <Button variant="accent" onClick={handleOpenThirdBackdrop}>
          Open Third Backdrop
        </Button>
      </Flexbox>
      <Backdrop {...args} open={open} onClose={handleClose}>
        <Button variant="accent" onClick={handleOpenSecondBackdrop}>
          Open Second Backdrop
        </Button>
      </Backdrop>
      <Backdrop {...args} open={openSecondBackdrop} onClose={handleCloseSecondBackdrop}>
        <Button variant="accent" onClick={handleOpenThirdBackdrop}>
          Open Third Backdrop
        </Button>
      </Backdrop>
      <Backdrop {...args} open={openThirdBackdrop} onClose={handleCloseThirdBackdrop}>
        <Button variant="accent" onClick={handleCloseThirdBackdrop}>
          Close Third Backdrop
        </Button>
      </Backdrop>
    </>
  );
}

export const Default: Story = {
  render: (args) => <BackdropWithHooks {...args} />
};

export const Queue: Story = {
  render: (args) => <WithQueue {...args} />
};
