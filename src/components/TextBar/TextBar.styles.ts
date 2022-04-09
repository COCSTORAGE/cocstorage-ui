import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { TextBarProps } from '.';

export const Wrapper = styled.div<Pick<TextBarProps, 'fullWidth'>>`
  position: relative;
  width: fit-content;

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : ''};
`;

const DefaultTextBar = styled.input`
  outline: 0;
  border-radius: 8px;
  font-size: 14px;
`;

export const StyledTextBar = styled(DefaultTextBar)<
  TextBarProps & {
    textBarSize?: 'small' | 'medium';
  }
>`
  background-color: ${({ theme: { palette } }) => palette.background.bg};
  border: 1px solid ${({ theme: { palette } }) => palette.box.filled.normal};

  color: ${({ theme: { type, palette } }) => palette.text[type].main};

  &::placeholder {
    color: ${({ theme: { type, palette } }) => palette.text[type].text1};
  }

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
  top: 50%;
  left: 0;
  font-size: 14px;
  padding: 0 5px;
  background-color: ${({ theme: { palette } }) => palette.background.bg};
  z-index: 1;
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  pointer-events: none;

  color: ${({ theme: { type, palette } }) => palette.text[type].text1};

  ${({ theme: { palette }, variant, isFocused, size }) => {
    const translateX = size === 'small' ? '7px' : '9px';

    switch (isFocused) {
      case true:
        return css`
          transform: translate(${translateX}, -145%) scale(0.75);
          ${variant === 'focused' ? `color: ${palette.primary.main}` : ''};
        `;
      default:
        return css`
          transform: translate(${translateX}, -50%) scale(1);
        `;
    }
  }};
`;