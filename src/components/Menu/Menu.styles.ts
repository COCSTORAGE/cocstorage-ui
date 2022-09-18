import styled, { CSSObject } from '@emotion/styled';

import { MenuProps } from '.';

export const Wrapper = styled.div``;

export const StyledMenu = styled.div<
  Pick<MenuProps, 'centered' | 'triangleLeft'> & {
    menuContentOpen: boolean;
    menuPosition: {
      top: number;
      left: number;
    };
  }
>`
  position: absolute;
  width: fit-content;
  min-width: 100px;

  border: 1px solid
    ${({
      theme: {
        palette: { box }
      }
    }) => box.stroked.normal};
  border-radius: 16px;
  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.bg};

  visibility: hidden;
  pointer-events: none;

  ${({ menuPosition: { top, left } }): CSSObject => ({
    top,
    left
  })};

  ${({ menuContentOpen }): CSSObject =>
    menuContentOpen
      ? {
          visibility: 'visible',
          pointerEvents: 'inherit'
        }
      : {}};

  &:after {
    content: '';
    border-top: 0 solid transparent;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 8px solid
      ${({
        theme: {
          palette: { background }
        }
      }) => background.bg};
    position: absolute;
    top: -7px;
    right: ${({ centered, triangleLeft }) => (centered ? '50%' : triangleLeft)};

    ${({ centered }): CSSObject =>
      centered
        ? {
            transform: 'translateX(50%)'
          }
        : {}};
  }

  &:before {
    content: '';
    border-top: 0 solid transparent;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 8px solid
      ${({
        theme: {
          palette: { box }
        }
      }) => box.stroked.normal};
    position: absolute;
    top: -8.3px;
    right: ${({ centered, triangleLeft }) => (centered ? '50%' : triangleLeft)};

    ${({ centered }): CSSObject =>
      centered
        ? {
            transform: 'translateX(50%)'
          }
        : {}};
  }
`;
