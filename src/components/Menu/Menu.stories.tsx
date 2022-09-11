import { useEffect, useRef, useState } from 'react';

import Button from '@components/Button';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Menu from '.';

export default {
  title: 'Experiment/Menu',
  component: Menu,
  argTypes: {
    anchorRef: {
      control: false
    }
  }
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = function Template(args) {
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
        Menu Open
      </Button>
      <Menu {...args} anchorRef={buttonRef} open={open} onClose={handleClose}>
        <div style={{ padding: 10 }}>
          <Button onClick={handleClose}>Close Menu</Button>
        </div>
      </Menu>
    </>
  );
};

export const Default = Template.bind({});
