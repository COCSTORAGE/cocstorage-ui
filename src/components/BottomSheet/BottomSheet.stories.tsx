import { useEffect, useState } from 'react';

import Button from '@components/Button';
import type { Meta } from '@storybook/react';

import BottomSheet from '.';

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet
} as Meta<typeof BottomSheet>;

const Template = function Template(args) {
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
};

export const Default = Template.bind({});
