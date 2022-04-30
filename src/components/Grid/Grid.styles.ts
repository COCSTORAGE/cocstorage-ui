import styled, { CSSObject } from '@emotion/styled';

import { GridProps, ConditionalSetGrid } from '.';

export const StyledGrid = styled.div<
  Pick<
    ConditionalSetGrid<GridProps>,
    'container' | 'rowGap' | 'columnGap' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  >
>`
  ${({
    theme: { breakpoints },
    container,
    rowGap = 0,
    columnGap = 0,
    xs,
    sm,
    md,
    lg,
    xl
  }): CSSObject => {
    let cssObject: CSSObject = {};
    switch (container) {
      case true:
        cssObject = {
          display: 'flex',
          flexWrap: 'wrap',
          width: `calc(100% + ${columnGap}px)`,
          margin: `-${rowGap / 2}px -${columnGap / 2}px -${rowGap / 2}px -${columnGap / 2}px`,
          '& > div.grid-item': {
            padding: `${rowGap / 2}px ${columnGap / 2}px ${rowGap / 2}px ${columnGap / 2}px`
          }
        };
        break;
      default:
        if (!Number.isNaN(Number(xs)) && xs) {
          cssObject = {
            cssObject,
            [`@media (min-width: ${breakpoints.xs}px)`]: {
              flexGrow: 0,
              maxWidth: `${100 / xs}%`,
              flexBasis: `${100 / xs}%`
            }
          };
        }
        if (sm) {
          cssObject = {
            ...cssObject,
            [`@media (min-width: ${breakpoints.sm}px)`]: {
              flexGrow: 0,
              maxWidth: `${100 / sm}%`,
              flexBasis: `${100 / sm}%`
            }
          };
        }
        if (md) {
          cssObject = {
            ...cssObject,
            [`@media (min-width: ${breakpoints.md}px)`]: {
              flexGrow: 0,
              maxWidth: `${100 / md}%`,
              flexBasis: `${100 / md}%`
            }
          };
        }
        if (lg) {
          cssObject = {
            ...cssObject,
            [`@media (min-width: ${breakpoints.lg}px)`]: {
              flexGrow: 0,
              maxWidth: `${100 / lg}%`,
              flexBasis: `${100 / lg}%`
            }
          };
        }
        if (xl) {
          cssObject = {
            ...cssObject,
            [`@media (min-width: ${breakpoints.xl}px)`]: {
              flexGrow: 0,
              maxWidth: `${100 / xl}%`,
              flexBasis: `${100 / xl}%`
            }
          };
        }
        break;
    }

    return cssObject;
  }}
`;
