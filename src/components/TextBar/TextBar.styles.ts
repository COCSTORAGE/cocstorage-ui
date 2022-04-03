import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { TextBarProps } from '.';

const DefaultTextBar = styled.input`
  outline: 0;
`;

export const Wrapper = styled.div<Pick<TextBarProps, 'fullWidth'>>`
  position: relative;

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : ''};
`;

export const StyledTextBar = styled(DefaultTextBar)<
  TextBarProps & {
    textBarSize?: 'small' | 'medium';
  }
>`
  background-color: ${({ theme: { palette } }) => palette.background.bg};
  border: 1px solid ${({ theme: { palette } }) => palette.box.filled.normal};
  border-radius: 8px;
  font-size: 14px;

  ${({ theme: { type, palette } }) => {
    switch (type) {
      case 'dark':
        return css`
          color: ${palette.text.dark.main};
          &::placeholder {
            color: ${palette.text.dark.text1};
          }
        `;
      default:
        return css`
          color: ${palette.text.light.main};
          &::placeholder {
            color: ${palette.text.light.text1};
          }
        `;
    }
  }};

  ${({ theme: { palette }, variant }) => {
    switch (variant) {
      case 'focused':
        return css`
          &:focus {
            border-color: ${palette.primary.main};
          }
        `;
      default:
        return '';
    }
  }};

  ${({ textBarSize }) => {
    switch (textBarSize) {
      case 'small':
        return css`
          padding: 9px 10px;
        `;
      default:
        return css`
          padding: 12px;
        `;
    }
  }};

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : ''};
`;

export const Label = styled.label<
  Pick<TextBarProps, 'variant' | 'size'> & {
    isFocused: boolean;
  }
>`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  background-color: ${({ theme: { palette } }) => palette.background.bg};
  z-index: 1;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  pointer-events: none;

  ${({ theme: { type, palette } }) => {
    switch (type) {
      case 'dark':
        return css`
          color: ${palette.text.dark.text1};
        `;
      default:
        return css`
          color: ${palette.text.light.text1};
        `;
    }
  }};

  ${({ theme: { palette }, variant, isFocused, size }) => {
    switch (isFocused) {
      case true:
        return css`
          transform: translate(
              -${size === 'small' ? 3.5 : 4}px,
              -${size === 'small' ? 16.5 : 19.5}px
            )
            scale(0.75);
          ${variant === 'focused' ? `color: ${palette.primary.main}` : ''};
        `;
      default:
        return css`
          transform: translate(0, 0) scale(1);
        `;
    }
  }};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          top: 10px;
          left: 5.5px;
          padding: 0 5.5px;
        `;
      default:
        return css`
          top: 13px;
          left: 6.5px;
          padding: 0 6.5px;
        `;
    }
  }};
`;
