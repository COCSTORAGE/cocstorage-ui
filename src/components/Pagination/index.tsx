import React, {
  useEffect,
  useState,
  useCallback,
  memo,
  HTMLAttributes,
  MouseEvent,
  RefObject
} from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

// Components
import Icon from '@components/Icon';

import { StyledPagination, PaginationItem } from './Pagination.styles';

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'onClick' | 'onChange'> {
  ref?: RefObject<HTMLUListElement>;
  count: number;
  page: number;
  rowPerPage?: number;
  itemCount?: number;
  onChange: (value: number) => void;
  customStyle?: SerializedStyles;
}

function Pagination({
  ref,
  count,
  page,
  rowPerPage = 20,
  itemCount = 10,
  onChange,
  customStyle,
  ...props
}: PaginationProps) {
  const { theme } = useTheme();

  const [totalPage, setTotalPage] = useState<number>(0);
  const [firstItem, setFirstItem] = useState<number>(0);
  const [lastItem, setLastItem] = useState<number>(0);

  const [items, setItems] = useState<Array<number>>([]);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLLIElement>) => {
      const dataPage = Number(event.currentTarget.getAttribute('data-page') || 0);

      if (dataPage < 1 || dataPage === page || dataPage > totalPage) return;

      onChange(dataPage);
    },
    [page, totalPage, onChange]
  );

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
        theme={theme}
        data-page={page - 1}
        disabled={page - 1 <= 0}
        onClick={handleClick}
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
        >
          {item}
        </PaginationItem>
      ))}
      <PaginationItem
        theme={theme}
        data-page={page + 1}
        disabled={page + 1 > totalPage}
        isNextItemButton
        onClick={handleClick}
      >
        <Icon name="CaretSemiLeftOutlined" width={18} height={18} />
      </PaginationItem>
    </StyledPagination>
  );
}

export default memo(Pagination);
