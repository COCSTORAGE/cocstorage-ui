import { useEffect, useState } from 'react';

import Button from '@components/Button';
import type { Meta } from '@storybook/react';

import Backdrop from '.';

export default {
  title: 'Experiment/Backdrop',
  component: Backdrop
} as Meta<typeof Backdrop>;

const Template = function Template(args) {
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
};

export const Default = Template.bind({});
Default.args = {
  centered: true
};
