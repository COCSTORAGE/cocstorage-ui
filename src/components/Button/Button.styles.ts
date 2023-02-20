import styled, { CSSObject } from '@emotion/styled';

import { BrandColor } from '../../types';

import { ButtonProps } from '.';

const DefaultButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  justify-content: center;
  text-align: center;
  border: none;
  background: none;
  cursor: pointer;
`;

export const StyledButton = styled(DefaultButton)<
  Pick<ButtonProps, 'variant' | 'size' | 'fullWidth'> & {
    brandColor: BrandColor;
  }
>`
  ${({
    theme: {
      mode,
      palette: { primary, text, box }
    },
    variant
  }) => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: primary.main,
          color: text.dark.main,
          '& svg': {
            color: text.dark.main
          },
          '&:hover': {
            backgroundColor: primary.sub1
          },
          '&:active': {
            backgroundColor: primary.sub2
          },
          '&:disabled': {
            backgroundColor: box.filled.disabled,
            color: text[mode].text2,
            '& svg': {
              color: text[mode].text2
            }
          }
        };
      case 'semiAccent':
        return {
          backgroundColor: primary.bg2,
          color: primary.main,
          '& svg': {
            color: primary.main
          },
          '&:hover': {
            backgroundColor: primary.bg3
          },
          '&:active': {
            backgroundColor: primary.bg1
          },
          '&:disabled': {
            backgroundColor: box.filled.disabled,
            color: text[mode].text2,
            '& svg': {
              color: text[mode].text2
            }
          }
        };
      case 'transparent':
        return {
          padding: '5px 6px !important',
          backgroundColor: 'transparent',
          borderRadius: 6,
          color: text[mode].main,
          '& svg': {
            color: text[mode].main
          },
          '&:hover': {
            backgroundColor: box.filled.focused
          },
          '&:active': {
            backgroundColor: box.filled.pressed
          },
          '&:disabled': {
            color: text[mode].text2,
            '& svg': {
              color: text[mode].text2
            }
          }
        };
      default:
        return {
          backgroundColor: box.filled.normal,
          color: text[mode].main,
          '& svg': {
            color: text[mode].main
          },
          '&:hover': {
            backgroundColor: box.filled.focused
          },
          '&:active': {
            backgroundColor: box.filled.pressed
          },
          '&:disabled': {
            backgroundColor: box.filled.disabled,
            color: text[mode].text2,
            '& svg': {
              color: text[mode].text2
            }
          }
        };
    }
  }}

  ${({
    theme: {
      typography: { p1, p2, s1 }
    },
    size
  }): CSSObject => {
    switch (size) {
      case 'big':
        return {
          padding: 12,
          borderRadius: 12,
          fontSize: p1.size,
          fontWeight: p1.weight.medium,
          letterSpacing: p1.letterSpacing,
          '& svg': {
            width: 20,
            height: 20
          }
        };
      case 'small':
        return {
          padding: 8,
          borderRadius: 8,
          fontSize: s1.size,
          fontWeight: s1.weight.medium,
          letterSpacing: s1.letterSpacing,
          '& svg': {
            width: 16,
            height: 16
          }
        };
      case 'pico':
        return {
          padding: 6,
          borderRadius: 6,
          fontSize: s1.size,
          fontWeight: s1.weight.medium,
          letterSpacing: s1.letterSpacing,
          '& svg': {
            width: 16,
            height: 16
          }
        };
      default:
        return {
          padding: 10,
          borderRadius: 10,
          fontSize: p2.size,
          fontWeight: p2.weight.medium,
          letterSpacing: p2.letterSpacing,
          '& svg': {
            width: 18,
            height: 18
          }
        };
    }
  }}
  
  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}};
`;
