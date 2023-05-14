import { RefAttributes, useEffect, useState } from 'react';

import Button from '@components/Button';

import { Meta, StoryObj } from '@storybook/react';

import BottomSheet, { BottomSheetProps } from '.';

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
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

export const Default: Story = {
  render: (args) => <BottomSheetWithHooks {...args} />
};
