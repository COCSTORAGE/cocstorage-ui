import { RefAttributes, useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Pagination, { PaginationProps } from '.';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination
};

export default meta;
type Story = StoryObj<typeof Pagination>;

function PaginationWithHooks(args: PaginationProps & RefAttributes<HTMLUListElement>) {
  const [page, setPage] = useState(1);

  const handleChange = (newPage: number) => setPage(newPage);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setPage(args.page);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.page]);

  return <Pagination {...args} count={1000} page={page} onChange={handleChange} />;
}

export const Default: Story = {
  render: (args) => <PaginationWithHooks {...args} />
};
