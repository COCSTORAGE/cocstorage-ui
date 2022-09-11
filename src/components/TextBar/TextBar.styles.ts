import styled, { CSSObject } from '@emotion/styled';

import { Size } from '../../types';

import { TextBarProps } from '.';

export const StyledTextBar = styled.div<
  Pick<TextBarProps, 'fullWidth' | 'size'> & {
    isFocused?: boolean;
    hasStartIcon?: boolean;
  }
>`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;

  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.bg};
  border: 1px solid
    ${({
      theme: {
        palette: { box }
      }
    }) => box.filled.normal};

  border-radius: 8px;

  ${({
    theme: {
      mode,
      palette: { primary, text }
    },
    isFocused
  }): CSSObject => {
    let cssObject: CSSObject;

    if (isFocused) {
      cssObject = {
        borderColor: primary.main,
        '& svg': {
          color: primary.main
        }
      };
    } else {
      cssObject = {
        '& svg': {
          color: text[mode].text1
        }
      };
    }

    return cssObject;
  }};

  ${({ size }): CSSObject => {
    switch (size) {
      case 'small':
        return {
          height: 36
        };
      case 'big':
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
  ${({
    theme: {
      typography: { p2 }
    }
  }): CSSObject => ({
    fontSize: p2.size,
    fontWeight: p2.weight.regular,
    letterSpacing: p2.letterSpacing
  })}
`;

export const Input = styled(DefaultInput)<
  Pick<TextBarProps, 'fullWidth'> & {
    textBarSize?: Exclude<Size, 'pico'>;
    hasStartIcon?: boolean;
  }
>`
  height: 100%;
  background: none;
  color: ${({
    theme: {
      mode,
      palette: { text }
    }
  }) => text[mode].main};

  &::placeholder {
    color: ${({
      theme: {
        mode,
        palette: { text }
      }
    }) => text[mode].text1};
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
  Pick<TextBarProps, 'size'> & {
    isFocused: boolean;
    hasValue: boolean;
  }
>`
  position: absolute;
  top: 50%;
  left: ${({ size }) => (size === 'small' ? 0 : -2)}px;
  bottom: 0;
  padding: 0 5px;
  font-size: ${({ theme: { typography } }) => typography.p2.size};
  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.bg};
  z-index: 1;
  transform-origin: top left;
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  pointer-events: none;

  color: ${({
    theme: {
      mode,
      palette: { text }
    }
  }) => text[mode].text1};

  ${({ theme: { palette }, isFocused, hasValue, size }): CSSObject => {
    let cssObject: CSSObject;
    const translateX = size === 'small' ? '7px' : '9px';

    let translateY = size === 'small' ? '-55%' : '-45%';

    if (size === 'big') translateY = '-40%';

    if (isFocused || hasValue) {
      translateY = size === 'small' ? '-140%' : '-135%';

      if (size === 'big') translateY = '-130%';

      cssObject = {
        transform: `translate(${translateX}, ${translateY}) scale(0.75)`
      };

      if (isFocused) {
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
  display: flex;
  align-items: center;
  height: 100%;

  ${({ size }): CSSObject => {
    const paddingL = size === 'small' ? '7px' : '9px';

    return {
      padding: `0 4px 0 ${paddingL}`
    };
  }}};
`;

export const EndIconWrapper = styled.div<Pick<TextBarProps, 'size'>>`
  display: flex;
  align-items: center;
  height: 100%;

  ${({ size }): CSSObject => {
    const paddingR = size === 'small' ? '7px' : '9px';

    return {
      padding: `0 ${paddingR} 0 4px`
    };
  }}};
`;
