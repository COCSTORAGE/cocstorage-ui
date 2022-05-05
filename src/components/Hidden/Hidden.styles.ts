import styled, { CSSObject } from '@emotion/styled';

import { HiddenProps } from '.';

export const StyledHidden = styled.div<HiddenProps>`
  ${({ theme: { breakpoints }, xsHidden, smHidden, mdHidden, lgHidden, xlHidden }): CSSObject => {
    let cssObject: CSSObject = {};

    if (xlHidden) {
      cssObject = {
        ...cssObject,
        [`@media (max-width: ${breakpoints.xl}px)`]: {
          display: 'none'
        }
      };
    }
    if (lgHidden) {
      cssObject = {
        ...cssObject,
        [`@media (max-width: ${breakpoints.lg}px)`]: {
          display: 'none'
        }
      };
    }
    if (mdHidden) {
      cssObject = {
        ...cssObject,
        [`@media (max-width: ${breakpoints.md}px)`]: {
          display: 'none'
        }
      };
    }
    if (smHidden) {
      cssObject = {
        ...cssObject,
        [`@media (max-width: ${breakpoints.sm}px)`]: {
          display: 'none'
        }
      };
    }
    if (xsHidden) {
      cssObject = {
        [`@media (max-width: ${breakpoints.xs}px)`]: {
          display: 'none'
        }
      };
    }

    return cssObject;
  }}
`;
