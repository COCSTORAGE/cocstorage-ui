import { useEffect, useState } from 'react';

import Button from '@components/Button';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Backdrop from '.';

export default {
  title: 'Experiment/Backdrop',
  component: Backdrop
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = function Template(args) {
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
      <Button onClick={handleClick}>Backdrop Open</Button>
      <Backdrop {...args} open={open} onClose={handleClose}>
        <Button variant="accent" onClick={handleClose}>
          Backdrop Close
        </Button>
      </Backdrop>
    </>
  );
};

export const Default = Template.bind({});
