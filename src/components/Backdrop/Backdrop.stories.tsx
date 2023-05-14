import { RefAttributes, useEffect, useState } from 'react';

import Button from '@components/Button';

import { Meta, StoryObj } from '@storybook/react';

import Backdrop, { BackdropProps } from '.';

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop',
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

export const Default: Story = {
  render: (args) => <BackdropWithHooks {...args} />
};
