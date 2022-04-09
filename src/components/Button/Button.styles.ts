import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ButtonProps } from '.';

const DefaultButton = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  background: none;
  border: 0;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
`;

export const StyledButton = styled(DefaultButton)<Omit<ButtonProps, 'iconOnly'>>`
  ${({ theme: { palette }, variant }) => {
    switch (variant) {
      case 'accent':
        return css`
          background-color: ${palette.primary.main};
          color: ${palette.text.dark.main};

          & svg path {
            fill: ${palette.text.dark.main};
          }

          &:hover {
            background-color: ${palette.primary.sub1};
          }

          &:active {
            background-color: ${palette.primary.sub2};
          }

          &:disabled {
            background-color: ${palette.box.filled.disabled};
            color: ${palette.text.light.text2};
          }
        `;
      case 'semiAccent':
        return css`
          background-color: ${palette.primary.bg2};
          color: ${palette.primary.main};

          & svg path {
            fill: ${palette.primary.main};
          }

          &:hover {
            background-color: ${palette.primary.bg3};
          }

          &:active {
            background-color: ${palette.primary.bg1};
          }

          &:disabled {
            background-color: ${palette.box.filled.disabled};
            color: ${palette.text.light.text2};
          }
        `;
      case 'transparent':
        return css`
          padding: 5px 6px !important;
          background-color: transparent;
          border-radius: 6px;
          color: ${palette.text.light.main};

          & svg path {
            fill: ${palette.text.light.main};
          }

          &:hover {
            background-color: ${palette.box.filled.focused};
          }

          &:active {
            background-color: ${palette.box.filled.pressed};
          }

          &:disabled {
            color: ${palette.text.light.text2};
          }
        `;
      default:
        return css`
          background-color: ${palette.box.filled.normal};
          color: ${palette.text.light.main};

          & svg path {
            fill: ${palette.text.light.main};
          }

          &:hover {
            background-color: ${palette.box.filled.focused};
          }

          &:active {
            background-color: ${palette.box.filled.pressed};
          }

          &:disabled {
            background-color: ${palette.box.filled.disabled};
            color: ${palette.text.light.text2};
          }
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'big':
        return css`
          padding: 18px 24px;
          border-radius: 12px;
          line-height: 20px;
          font-size: 16px;
        `;
      case 'small':
        return css`
          padding: 10px 15px;
          border-radius: 8px;
          line-height: 15px;
          font-size: 12px;
        `;
      case 'pico':
        return css`
          padding: 5px 10px;
          border-radius: 6px;
          line-height: 15px;
          font-size: 12px;
        `;
      default:
        return css`
          padding: 13px 21px;
          border-radius: 10px;
          line-height: 18px;
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
`;
