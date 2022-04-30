import React, { memo, PropsWithChildren, HTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledGrid } from './Grid.styles';

export interface GridProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export type ConditionalSetGrid<T> = T &
  (
    | {
        container: boolean;
        rowGap?: number;
        columnGap?: number;
        item?: never;
        xs?: never;
        sm?: never;
        md?: never;
        lg?: never;
        xl?: never;
      }
    | {
        container?: never;
        rowGap?: never;
        columnGap?: never;
        item: boolean;
        xs?: 1 | 2 | 3 | 4 | 5;
        sm?: 1 | 2 | 3 | 4 | 5;
        md?: 1 | 2 | 3 | 4 | 5;
        lg?: 1 | 2 | 3 | 4 | 5;
        xl?: 1 | 2 | 3 | 4 | 5;
      }
  );

function Grid({
  children,
  ref,
  container,
  rowGap = 0,
  columnGap = 0,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  customStyle,
  ...props
}: PropsWithChildren<ConditionalSetGrid<GridProps>>) {
  const { theme } = useTheme();

  return (
    <StyledGrid
      ref={ref}
      theme={theme}
      container={container}
      className={item ? 'grid-item' : ''}
      rowGap={rowGap}
      columnGap={columnGap}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      css={customStyle}
      {...props}
    >
      {children}
    </StyledGrid>
  );
}

export default memo(Grid);
