import { useEffect, useState } from 'react';

import Button from '@components/Button';
import type { Meta } from '@storybook/react';

import Dialog from '.';

export default {
  title: 'Components/Dialog',
  component: Dialog
} as Meta<typeof Dialog>;

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
        Open Dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose}>
        <Button onClick={handleClose}>Close Dialog</Button>
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
