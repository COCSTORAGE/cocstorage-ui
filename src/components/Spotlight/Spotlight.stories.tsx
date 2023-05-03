import { useRef, useState } from 'react';

import Button from '@components/Button';
import Tooltip from '@components/Tooltip';
import type { Meta } from '@storybook/react';

import Spotlight from '.';

export default {
  title: 'Experiment/Spotlight',
  component: Spotlight
} as Meta<typeof Spotlight>;

const Template = function Template(args) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button ref={buttonRef} onClick={handleClick}>
        Spotlight Open
      </Button>
      <Spotlight
        {...args}
        open={open}
        onClose={handleClose}
        targetRef={buttonRef}
        style={{ borderRadius: 8 }}
      >
        <Tooltip open={open} content="Tooltip" placement="right" onClose={handleClose}>
          <Button onClick={handleClose}>Spotlight Open</Button>
        </Tooltip>
      </Spotlight>
    </>
  );
};

export const Default = Template.bind({});
