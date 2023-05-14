import styled, { CSSObject } from '@emotion/styled';

import { Size } from '@types';

import { TextBarProps } from '.';

export const StyledTextBar = styled.div<
  Pick<TextBarProps, 'fullWidth' | 'variant' | 'size'> & {
    isFocused?: boolean;
    hasStartIcon?: boolean;
  }
>`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 8px;

  ${({
    theme: {
      palette: { background, box }
    },
    variant
  }): CSSObject => ({
    backgroundColor: variant === 'outline' ? background.bg : box.filled.normal
  })};

  border: 1px solid
    ${({
      theme: {
        palette: { box }
      }
    }) => box.filled.normal};

  ${({
    theme: {
      palette: { primary }
    },
    variant,
    isFocused
  }): CSSObject => {
    let cssObject: CSSObject = {};

    if (variant === 'fill') {
      cssObject = {
        borderColor: 'transparent'
      };
    }

    if (isFocused) {
      cssObject = {
        borderColor: primary.main
      };
    }

    return cssObject;
  }};

  ${({ size }): CSSObject => {
    switch (size) {
      case 'small':
        return {
          height: 32,
          '& svg': {
            width: 16,
            height: 16
          }
        };
      case 'big':
        return {
          height: 44,
          '& svg': {
            width: 20,
            height: 20
          }
        };
      case 'xBig':
        return {
          height: 52,
          '& svg': {
            width: 20,
            height: 20
          }
        };
      default:
        return {
          height: 38,
          '& svg': {
            width: 18,
            height: 18
          }
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
`;

export const Input = styled(DefaultInput)<
  Pick<TextBarProps, 'fullWidth'> & {
    textBarSize: Exclude<Size, 'pico'>;
    hasStartIcon?: boolean;
    hasEndIcon?: boolean;
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
    }) => text[mode].text2};
  }

  ${({ textBarSize, hasStartIcon, hasEndIcon }): CSSObject => {
    if (!hasStartIcon && !hasEndIcon) {
      if (textBarSize === 'small') {
        return {
          padding: '0 8px'
        };
      }

      if (textBarSize === 'medium') {
        return {
          padding: '0 10px'
        };
      }

      if (textBarSize === 'big') {
        return {
          padding: '0 12px'
        };
      }
      if (textBarSize === 'xBig') {
        return {
          padding: '0 16px'
        };
      }
    } else if (hasStartIcon) {
      if (textBarSize === 'small') {
        return {
          paddingRight: 8
        };
      }

      if (textBarSize === 'medium') {
        return {
          paddingRight: 10
        };
      }

      if (textBarSize === 'big') {
        return {
          paddingRight: 12
        };
      }
      if (textBarSize === 'xBig') {
        return {
          paddingRight: 16
        };
      }
    } else if (hasEndIcon) {
      if (textBarSize === 'small') {
        return {
          paddingLeft: 8
        };
      }

      if (textBarSize === 'medium') {
        return {
          paddingLeft: 10
        };
      }

      if (textBarSize === 'big') {
        return {
          paddingLeft: 12
        };
      }
      if (textBarSize === 'xBig') {
        return {
          paddingLeft: 16
        };
      }
    }

    return {};
  }};

  ${({
    theme: {
      typography: { p1, p2, s1 }
    },
    textBarSize
  }): CSSObject => {
    switch (textBarSize) {
      case 'small':
        return {
          fontSize: s1.size,
          fontWeight: s1.weight.regular,
          letterSpacing: s1.letterSpacing,
          lineHeight: s1.lineHeight.default
        };

      case 'big':
        return {
          fontSize: p1.size,
          fontWeight: p1.weight.regular,
          letterSpacing: p1.letterSpacing,
          lineHeight: p1.lineHeight.default
        };

      case 'xBig':
        return {
          fontSize: p1.size,
          fontWeight: p1.weight.regular,
          letterSpacing: p1.letterSpacing,
          lineHeight: p1.lineHeight.default
        };

      default:
        return {
          fontSize: p2.size,
          fontWeight: p2.weight.regular,
          letterSpacing: p2.letterSpacing,
          lineHeight: p2.lineHeight.default
        };
    }
  }}

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

  ${({
    theme: {
      typography: { p1, p2, s1 }
    },
    size
  }): CSSObject => {
    switch (size) {
      case 'small':
        return {
          fontSize: s1.size,
          fontWeight: s1.weight.regular,
          letterSpacing: s1.letterSpacing,
          lineHeight: s1.lineHeight.default
        };

      case 'big':
        return {
          fontSize: p1.size,
          fontWeight: p1.weight.regular,
          letterSpacing: p1.letterSpacing,
          lineHeight: p1.lineHeight.default
        };

      case 'xBig':
        return {
          fontSize: p1.size,
          fontWeight: p1.weight.regular,
          letterSpacing: p1.letterSpacing,
          lineHeight: p1.lineHeight.default
        };

      default:
        return {
          fontSize: p2.size,
          fontWeight: p2.weight.regular,
          letterSpacing: p2.letterSpacing,
          lineHeight: p2.lineHeight.default
        };
    }
  }}

  color: ${({
    theme: {
      mode,
      palette: { text }
    }
  }) => text[mode].text2};

  ${({
    theme: {
      palette: { primary }
    },
    isFocused,
    hasValue,
    size
  }): CSSObject => {
    let cssObject: CSSObject;
    let translateX = size === 'small' ? '3px' : '7px';
    let translateY = size === 'small' ? '-55%' : '-48%';

    if (size === 'big') {
      translateX = '9px';
      translateY = '-50%';
    }

    if (size === 'xBig') {
      translateX = '13px';
      translateY = '-41%';
    }

    if (isFocused || hasValue) {
      translateY = size === 'small' ? '-140%' : '-135%';

      if (size === 'big') translateY = '-135%';
      if (size === 'xBig') translateY = '-130%';

      cssObject = {
        transform: `translate(${translateX}, ${translateY}) scale(0.75)`
      };

      if (isFocused) {
        cssObject = {
          ...cssObject,
          color: primary.main
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
    switch (size) {
      case 'small':
        return {
          paddingLeft: 8
        };
      case 'big':
        return {
          paddingLeft: 12
        };
      case 'xBig':
        return {
          paddingLeft: 16
        };
      default:
        return {
          paddingLeft: 10
        };
    }
  }};
`;

export const EndIconWrapper = styled.div<Pick<TextBarProps, 'size'>>`
  display: flex;
  align-items: center;
  height: 100%;

  ${({ size }): CSSObject => {
    switch (size) {
      case 'small':
        return {
          paddingRight: 8
        };
      case 'big':
        return {
          paddingRight: 12
        };
      case 'xBig':
        return {
          paddingRight: 16
        };
      default:
        return {
          paddingRight: 10
        };
    }
  }};
`;
