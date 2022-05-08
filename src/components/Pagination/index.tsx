import React, { useEffect, useState, forwardRef, HTMLAttributes, MouseEvent } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledPagination, PaginationItem, PaginationDot } from './Pagination.styles';

// Components
import Icon from '../Icon';

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
  const { theme } = useTheme();

  const [totalPage, setTotalPage] = useState<number>(0);
  const [firstItem, setFirstItem] = useState<number>(0);
  const [lastItem, setLastItem] = useState<number>(0);

  const [items, setItems] = useState<Array<number>>([]);

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
    <StyledPagination ref={ref} css={customStyle} {...props}>
      <PaginationItem
        theme={theme}
        data-page={page - 1}
        disabled={page - 1 <= 0}
        onClick={handleClick}
        tabIndex={0}
      >
        <Icon name="CaretSemiLeftOutlined" width={18} height={18} />
      </PaginationItem>
      {items.map((item) => (
        <PaginationItem
          key={`pagination-item-${item}`}
          theme={theme}
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
          <PaginationDot theme={theme} />
          <PaginationItem
            theme={theme}
            data-page={totalPage}
            selected={false}
            onClick={handleClick}
            tabIndex={0}
          >
            {totalPage}
          </PaginationItem>
        </>
      )}
      <PaginationItem
        theme={theme}
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
