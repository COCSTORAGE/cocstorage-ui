import styled, { CSSObject } from '@emotion/styled';

import { TextBarProps } from '.';

export const StyledTextBar = styled.div<
  Pick<TextBarProps, 'variant' | 'fullWidth'> & {
    isFocused?: boolean;
    textBarSize?: 'small' | 'medium' | 'large';
    hasStartIcon?: boolean;
  }
>`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;

  background-color: ${({ theme: { palette } }) => palette.background.bg};
  border: 1px solid ${({ theme: { palette } }) => palette.box.filled.normal};

  border-radius: 8px;

  ${({ theme: { type, palette }, variant, isFocused }): CSSObject => {
    let cssObject: CSSObject;
    switch (variant) {
      case 'focused':
        if (isFocused) {
          cssObject = {
            borderColor: palette.primary.main,
            '& svg': {
              color: palette.primary.main
            }
          };
        } else {
          cssObject = {
            '& svg': {
              color: palette.text[type].text1
            }
          };
        }
        return cssObject;
      default:
        return {
          '& svg': {
            color: palette.text[type].text1
          }
        };
    }
  }};

  ${({ textBarSize }): CSSObject => {
    switch (textBarSize) {
      case 'small':
        return {
          height: 36
        };
      case 'large':
        return {
          height: 48
        };
      default:
        return {
          height: 42
        };
    }
  }};

  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}};
`;

const DefaultInput = styled.input`
  outline: 0;
  border: none;
  border-radius: 8px;
  font-size: 14px;
`;

export const Input = styled(DefaultInput)<
  Pick<TextBarProps, 'fullWidth'> & {
    textBarSize?: 'small' | 'medium' | 'large';
    hasStartIcon?: boolean;
  }
>`
  height: 100%;
  background: none;
  color: ${({ theme: { type, palette } }) => palette.text[type].main};

  &::placeholder {
    color: ${({ theme: { type, palette } }) => palette.text[type].text1};
  }

  ${({ textBarSize, hasStartIcon }): CSSObject => {
    if (textBarSize === 'small' && !hasStartIcon) {
      return {
        padding: '0 9px'
      };
    }

    if (!hasStartIcon) {
      return {
        padding: '0 12px'
      };
    }
    return {};
  }};

  ${({ fullWidth, hasStartIcon }): CSSObject =>
    fullWidth || hasStartIcon
      ? {
          flexGrow: 1
        }
      : {}};
`;

export const Label = styled.label<
  Pick<TextBarProps, 'variant' | 'size'> & {
    isFocused: boolean;
    hasValue: boolean;
  }
>`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 5px;
  font-size: 14px;
  background-color: ${({ theme: { palette } }) => palette.background.bg};
  z-index: 1;
  transform-origin: top left;
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  pointer-events: none;

  color: ${({ theme: { type, palette } }) => palette.text[type].text1};

  ${({ theme: { palette }, variant, isFocused, hasValue, size }): CSSObject => {
    let cssObject: CSSObject;
    const translateX = size === 'small' ? '7px' : '9px';

    let translateY = size === 'small' ? '-35%' : '-50%';

    if (size === 'large') translateY = '-60%';

    if (isFocused || hasValue) {
      translateY = size === 'small' ? '-105%' : '-130%';

      if (size === 'large') translateY = '-160%';

      cssObject = {
        transform: `translate(${translateX}, ${translateY}) scale(0.75)`
      };

      if (variant === 'focused' && isFocused) {
        cssObject = {
          ...cssObject,
          color: palette.primary.main
        };
      }

      return cssObject;
    }

    return {
      transform: `translate(${translateX}, ${translateY}) scale(1)`
    };
  }};
`;

export const StartIconWrapper = styled.div<Pick<TextBarProps, 'size'>>`
  ${({ size }): CSSObject => {
    const paddingL = size === 'small' ? '7px' : '9px';

    return {
      padding: `0 4px 0 ${paddingL}`
    };
  }}};
`;
