import styled, { CSSObject } from '@emotion/styled';

import { ConditionalSetGrid, GridProps } from '.';

export const StyledGrid = styled.div<
  Pick<
    ConditionalSetGrid<GridProps>,
    | 'container'
    | 'rowGap'
    | 'columnGap'
    | 'auto'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xsHidden'
    | 'smHidden'
    | 'mdHidden'
    | 'lgHidden'
    | 'xlHidden'
  >
>`
  ${({
    theme: { breakpoints },
    container,
    rowGap = 0,
    columnGap = 0,
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
    xlHidden
  }): CSSObject => {
    let cssObject: CSSObject = {};
    switch (container) {
      case true:
        cssObject = {
          display: 'flex',
          flexWrap: 'wrap',
          width: `calc(100% + ${columnGap}px)`,
          margin: `-${rowGap / 2}px -${columnGap / 2}px -${rowGap / 2}px -${columnGap / 2}px`,
          '& > .grid-item': {
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
            [`@media (min-width: ${breakpoints.md}px)`]: mdHidden
              ? { display: 'hidden' }
              : {
                  flexGrow: 0,
                  maxWidth: `${100 / md}%`,
                  flexBasis: `${100 / md}%`
                }
          };
        }
        if (lg) {
          cssObject = {
            ...cssObject,
            [`@media (min-width: ${breakpoints.lg}px)`]: lgHidden
              ? { display: 'hidden' }
              : {
                  flexGrow: 0,
                  maxWidth: `${100 / lg}%`,
                  flexBasis: `${100 / lg}%`
                }
          };
        }
        if (xl) {
          cssObject = {
            ...cssObject,
            [`@media (min-width: ${breakpoints.xl}px)`]: xlHidden
              ? { display: 'hidden' }
              : {
                  flexGrow: 0,
                  maxWidth: `${100 / xl}%`,
                  flexBasis: `${100 / xl}%`
                }
          };
        }

        if (xlHidden) {
          if (xl) delete cssObject[`@media (min-width: ${breakpoints.xl}px)`];

          cssObject = {
            ...cssObject,
            [`@media (max-width: ${breakpoints.xl}px)`]: {
              display: 'none'
            }
          };
        }
        if (lgHidden) {
          if (lg) delete cssObject[`@media (min-width: ${breakpoints.lg}px)`];

          cssObject = {
            ...cssObject,
            [`@media (max-width: ${breakpoints.lg}px)`]: {
              display: 'none'
            }
          };
        }
        if (mdHidden) {
          if (md) delete cssObject[`@media (min-width: ${breakpoints.md}px)`];

          cssObject = {
            ...cssObject,
            [`@media (max-width: ${breakpoints.md}px)`]: {
              display: 'none'
            }
          };
        }
        if (smHidden) {
          if (sm) delete cssObject[`@media (min-width: ${breakpoints.sm}px)`];

          cssObject = {
            ...cssObject,
            [`@media (max-width: ${breakpoints.sm}px)`]: {
              display: 'none'
            }
          };
        }
        if (xsHidden) {
          if (!Number.isNaN(Number(xs)) && xs)
            delete cssObject[`@media (min-width: ${breakpoints.xs}px)`];

          cssObject = {
            [`@media (max-width: ${breakpoints.xs}px)`]: {
              display: 'none'
            }
          };
        }

        if (auto) {
          cssObject = {
            flex: 1
          };
        }
        break;
    }

    return cssObject;
  }}
`;
