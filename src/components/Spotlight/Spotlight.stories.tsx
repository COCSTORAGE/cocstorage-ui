import { RefAttributes, useRef, useState } from 'react';

import Button from '@components/Button';

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
        Open Spotlight
      </Button>
      <Spotlight
        {...args}
        open={open}
        onClose={handleClose}
        targetRef={buttonRef}
        round={8}
        content="Welcome!"
      />
    </>
  );
}

export const Default: Story = {
  render: (args) => <SpotlightWithHooks {...args} />
};
