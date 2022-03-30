import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ButtonProps } from '.';

export const StyledButton = styled.button<
  Omit<ButtonProps, 'iconOnly'> & { hasStartIcon: boolean }
>`
  width: fit-content;
  text-align: center;
  border-radius: 12px;

  ${({ theme: { palette }, variant }) => {
    switch (variant) {
      case 'accent':
        return css`
          background-color: ${palette.primary.main};
          color: ${palette.text.dark.text1};

          &:hover {
            background-color: ${palette.primary.sub1};
          }

          &:active {
            background-color: ${palette.primary.sub2};
          }

          &:disabled {
            background-color: ${palette.box.filled.disabled};
            color: ${palette.text.light.text3};
          }
        `;
      case 'semiAccent':
        return css`
          background-color: ${palette.primary.bg2};
          color: ${palette.primary.main};

          &:hover {
            background-color: ${palette.primary.bg3};
          }

          &:active {
            background-color: ${palette.primary.bg1};
          }

          &:disabled {
            background-color: ${palette.box.filled.disabled};
            color: ${palette.text.light.text3};
          }
        `;
      case 'transparent':
        return css`
          padding: 5px 6px !important;
          background-color: transparent;
          border-radius: 6px;
          color: ${palette.text.light.text1};

          &:hover {
            background-color: ${palette.box.filled.focused};
          }

          &:active {
            background-color: ${palette.box.filled.pressed};
          }

          &:disabled {
            color: ${palette.text.light.text3};
          }
        `;
      default:
        return css`
          background-color: ${palette.box.filled.normal};
          color: ${palette.text.light.text1};

          &:hover {
            background-color: ${palette.box.filled.focused};
          }

          &:active {
            background-color: ${palette.box.filled.pressed};
          }

          &:disabled {
            background-color: ${palette.box.filled.disabled};
            color: ${palette.text.light.text3};
          }
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'big':
        return css`
          padding: 18px 24px;
          font-size: 16px;
        `;
      case 'small':
        return css`
          padding: 10px 15px;
          font-size: 12px;
        `;
      case 'pico':
        return css`
          padding: 5px 10px;
          font-size: 12px;
        `;
      default:
        return css`
          padding: 13px 21px;
          font-size: 14px;
        `;
    }
  }}
  
  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : ''};

  ${({ hasStartIcon }) =>
    hasStartIcon
      ? css`
          display: flex;
          align-items: center;
          gap: 4px;
        `
      : ''};
`;
