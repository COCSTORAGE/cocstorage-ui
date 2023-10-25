import { HTMLAttributes, MouseEvent, forwardRef, useEffect, useState } from 'react';

import Icon from '@components/Icon';

import { GenericComponentProps } from '@typings';

import { PaginationDot, PaginationItem, StyledPagination } from './Pagination.styles';

export interface PaginationProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLUListElement>, 'onClick' | 'onChange'>> {
  count: number;
  page: number;
  rowPerPage?: number;
  itemCount?: number;
  onChange: (value: number) => void;
}

const Pagination = forwardRef<HTMLUListElement, PaginationProps>(function Pagination(
  { count, page, rowPerPage = 20, itemCount = 10, onChange, customStyle, ...props },
  ref
) {
  const [totalPage, setTotalPage] = useState(0);
  const [firstItem, setFirstItem] = useState(0);
  const [lastItem, setLastItem] = useState(0);

  const [items, setItems] = useState<number[]>([]);

  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    const dataPage = Number(event.currentTarget.getAttribute('data-page') || 0);

    if (dataPage < 1 || dataPage === page || dataPage > totalPage) return;

    onChange(dataPage);
  };

  useEffect(() => {
    const newTotalPage = Math.ceil(count / rowPerPage);
    const currentPageGroup = Math.ceil(page / itemCount);

    let newLastItem = currentPageGroup * itemCount;
    if (newLastItem > newTotalPage) newLastItem = newTotalPage;

    let newFirstItem = newLastItem - (itemCount - 1);
    if (newFirstItem <= 0) newFirstItem = 1;

    setTotalPage(newTotalPage);
    setLastItem(newLastItem);
    setFirstItem(newFirstItem);
  }, [count, page, rowPerPage, itemCount]);

  useEffect(() => {
    const newItems = [];

    for (let i = firstItem; i <= lastItem; i += 1) {
      newItems.push(i);
    }

    setItems(newItems);
  }, [firstItem, lastItem]);

  return (
    <StyledPagination ref={ref} {...props} css={customStyle}>
      <PaginationItem
        data-page={page - 1}
        disabled={page - 1 <= 0}
        onClick={handleClick}
        tabIndex={0}
      >
        <Icon name="CaretSemiLeftOutlined" width={18} height={18} />
      </PaginationItem>
      {totalPage && !items.includes(1) && (
        <>
          <PaginationItem data-page={1} selected={false} onClick={handleClick} tabIndex={0}>
            1
          </PaginationItem>
          <PaginationDot />
        </>
      )}
      {items.map((item) => (
        <PaginationItem
          key={`pagination-item-${item}`}
          data-page={item}
          selected={item === page}
          onClick={handleClick}
          tabIndex={0}
        >
          {item}
        </PaginationItem>
      ))}
      {totalPage && !items.includes(totalPage) && (
        <>
          <PaginationDot />
          <PaginationItem data-page={totalPage} selected={false} onClick={handleClick} tabIndex={0}>
            {totalPage}
          </PaginationItem>
        </>
      )}
      <PaginationItem
        data-page={page + 1}
        disabled={page + 1 > totalPage}
        isNextItemButton
        onClick={handleClick}
        tabIndex={0}
      >
        <Icon name="CaretSemiLeftOutlined" width={18} height={18} />
      </PaginationItem>
    </StyledPagination>
  );
});

export default Pagination;
