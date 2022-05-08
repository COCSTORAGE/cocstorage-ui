import React, { forwardRef, PropsWithChildren, ElementType, HTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledGrid } from './Grid.styles';

export interface GridProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  component?: Extract<ElementType, 'div' | 'section' | 'main' | 'article'>;
}

export type ConditionalSetGrid<T> = T &
  (
    | {
        container: boolean;
        rowGap?: number;
        columnGap?: number;
        item?: never;
        auto?: never;
        xs?: never;
        sm?: never;
        md?: never;
        lg?: never;
        xl?: never;
        xsHidden?: never;
        smHidden?: never;
        mdHidden?: never;
        lgHidden?: never;
        xlHidden?: never;
      }
    | {
        container?: never;
        rowGap?: never;
        columnGap?: never;
        item: boolean;
        auto?: never;
        xs?: 1 | 2 | 3 | 4 | 5;
        sm?: 1 | 2 | 3 | 4 | 5;
        md?: 1 | 2 | 3 | 4 | 5;
        lg?: 1 | 2 | 3 | 4 | 5;
        xl?: 1 | 2 | 3 | 4 | 5;
        xsHidden?: boolean;
        smHidden?: boolean;
        mdHidden?: boolean;
        lgHidden?: boolean;
        xlHidden?: boolean;
      }
    | {
        container?: never;
        rowGap?: never;
        columnGap?: never;
        item: boolean;
        auto?: boolean;
        xs?: never;
        sm?: never;
        md?: never;
        lg?: never;
        xl?: never;
        xsHidden?: boolean;
        smHidden?: boolean;
        mdHidden?: boolean;
        lgHidden?: boolean;
        xlHidden?: boolean;
      }
  );

const Grid = forwardRef<HTMLDivElement, PropsWithChildren<ConditionalSetGrid<GridProps>>>(
  function Grid(
    {
      children,
      component = 'div',
      container,
      rowGap = 0,
      columnGap = 0,
      item,
      auto,
      xs,
      sm,
      md,
      lg,
      xl,
      xsHidden,
      smHidden,
      mdHidden,
      lgHidden,
      xlHidden,
      customStyle,
      ...props
    },
    ref
  ) {
    return (
      <StyledGrid
        as={component}
        ref={ref}
        container={container}
        className={item ? 'grid-item' : undefined}
        rowGap={rowGap}
        columnGap={columnGap}
        auto={auto}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        xsHidden={xsHidden}
        smHidden={smHidden}
        mdHidden={mdHidden}
        lgHidden={lgHidden}
        xlHidden={xlHidden}
        css={customStyle}
        {...props}
      >
        {children}
      </StyledGrid>
    );
  }
);

export default Grid;
