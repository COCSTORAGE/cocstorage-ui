import { RefAttributes, useEffect, useRef, useState } from 'react';

import Button from '@components/Button';

import { Meta, StoryObj } from '@storybook/react';

import Menu, { MenuProps } from '.';

const meta: Meta<typeof Menu> = {
  title: 'Experiment/Menu',
  component: Menu
};

export default meta;
type Story = StoryObj<typeof Menu>;

function MenuWithHooks(args: MenuProps & RefAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setOpen(args.open);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.open]);

  return (
    <>
      <Button ref={buttonRef} onClick={handleOpen}>
        Open Menu
      </Button>
      <Menu {...args} anchorRef={buttonRef} open={open} onClose={handleClose}>
        <div style={{ padding: 10 }}>
          <Button onClick={handleClose}>Menu Close</Button>
        </div>
      </Menu>
    </>
  );
}

export const Default: Story = {
  render: (args) => <MenuWithHooks {...args} />
};
