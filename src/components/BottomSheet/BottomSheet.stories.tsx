import { RefAttributes, useEffect, useState } from 'react';

import Button from '@components/Button';

import Flexbox from '@components/Flexbox';
import { Meta, StoryObj } from '@storybook/react';

import BottomSheet, { BottomSheetProps } from '.';

const meta: Meta<typeof BottomSheet> = {
  title: 'Experiment/BottomSheet',
  component: BottomSheet
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

function BottomSheetWithHooks(args: BottomSheetProps & RefAttributes<HTMLDivElement>) {
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
        Open BottomSheet
      </Button>
      <BottomSheet {...args} open={open} onClose={handleClose}>
        <Button onClick={handleClose}>Close BottomSheet</Button>
      </BottomSheet>
    </>
  );
}

function WithQueue(args: BottomSheetProps & RefAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);
  const [openSecondBottomSheet, setOpenSecondBottomSheet] = useState(false);
  const [openThirdBottomSheet, setOpenThirdBottomSheet] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenSecondBottomSheet = () => {
    setOpen(false);
    setOpenSecondBottomSheet(true);
  };

  const handleCloseSecondBottomSheet = () => setOpenSecondBottomSheet(false);

  const handleOpenThirdBottomSheet = () => {
    setOpenSecondBottomSheet(false);
    setOpenThirdBottomSheet(true);
  };

  const handleCloseThirdBottomSheet = () => setOpenThirdBottomSheet(false);

  const handleOpenAll = () => {
    setOpen(true);
    setOpenSecondBottomSheet(true);
    setOpenThirdBottomSheet(true);
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
          Open BottomSheet
        </Button>
        <Button variant="accent" onClick={handleOpenSecondBottomSheet}>
          Open Second BottomSheet
        </Button>
        <Button variant="accent" onClick={handleOpenThirdBottomSheet}>
          Open Third BottomSheet
        </Button>
        <Button variant="accent" onClick={handleOpenAll}>
          Open All
        </Button>
      </Flexbox>
      <BottomSheet {...args} open={open} onClose={handleClose}>
        <Button onClick={handleOpenSecondBottomSheet}>Open Second BottomSheet</Button>
      </BottomSheet>
      <BottomSheet
        {...args}
        open={openSecondBottomSheet}
        onClose={handleCloseSecondBottomSheet}
        transitionDuration={325}
      >
        <Button onClick={handleOpenThirdBottomSheet}>Open Third BottomSheet</Button>
      </BottomSheet>
      <BottomSheet
        {...args}
        open={openThirdBottomSheet}
        onClose={handleCloseThirdBottomSheet}
        transitionDuration={425}
      >
        <Button onClick={handleCloseThirdBottomSheet}>Close Third BottomSheet</Button>
      </BottomSheet>
    </>
  );
}

export const Default: Story = {
  render: (args) => <BottomSheetWithHooks {...args} />
};

export const Queue: Story = {
  render: (args) => <WithQueue {...args} />
};
