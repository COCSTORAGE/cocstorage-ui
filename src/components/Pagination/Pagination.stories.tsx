import { useEffect, useState } from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Pagination from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = function Template(args) {
  const [page, setPage] = useState<number>(1);

  const handleChange = (newPage: number) => setPage(newPage);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setPage(args.page);
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.page]);

  return <Pagination {...args} page={page} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  count: 1000,
  rowPerPage: 20,
  itemCount: 10,
  page: 1
};
