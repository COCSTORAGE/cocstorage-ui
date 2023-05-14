import { RefAttributes, useRef, useState } from 'react';

import Button from '@components/Button';
import Tooltip from '@components/Tooltip';

import { Meta, StoryObj } from '@storybook/react';

import Spotlight, { SpotlightProps } from '.';

const meta: Meta<typeof Spotlight> = {
  title: 'Experiment/Spotlight',
  component: Spotlight
};

export default meta;
type Story = StoryObj<typeof Spotlight>;

function SpotlightWithHooks(args: SpotlightProps & RefAttributes<HTMLDivElement>) {
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
}

export const Default: Story = {
  render: (args) => <SpotlightWithHooks {...args} />
};
