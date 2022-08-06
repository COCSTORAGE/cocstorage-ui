import styled, { CSSObject } from '@emotion/styled';

import { BrandColor } from '../../types';

import { ButtonProps } from '.';

const DefaultButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
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
  ${({ theme: { type, palette }, variant }) => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: palette.primary.main,
          color: palette.text.dark.main,
          '& svg': {
            color: palette.text.dark.main
          },
          '&:hover': {
            backgroundColor: palette.primary.sub1
          },
          '&:active': {
            backgroundColor: palette.primary.sub2
          },
          '&:disabled': {
            backgroundColor: palette.box.filled.disabled,
            color: palette.text[type].text2,
            '& svg': {
              color: palette.text[type].text2
            }
          }
        };
      case 'semiAccent':
        return {
          backgroundColor: palette.primary.bg2,
          color: palette.primary.main,
          '& svg': {
            color: palette.primary.main
          },
          '&:hover': {
            backgroundColor: palette.primary.bg3
          },
          '&:active': {
            backgroundColor: palette.primary.bg1
          },
          '&:disabled': {
            backgroundColor: palette.box.filled.disabled,
            color: palette.text[type].text2,
            '& svg': {
              color: palette.text[type].text2
            }
          }
        };
      case 'transparent':
        return {
          padding: '5px 6px !important',
          backgroundColor: 'transparent',
          borderRadius: 6,
          color: palette.text[type].main,
          '& svg': {
            color: palette.text[type].main
          },
          '&:hover': {
            backgroundColor: palette.box.filled.focused
          },
          '&:active': {
            backgroundColor: palette.box.filled.pressed
          },
          '&:disabled': {
            color: palette.text[type].text2,
            '& svg': {
              color: palette.text[type].text2
            }
          }
        };
      default:
        return {
          backgroundColor: palette.box.filled.normal,
          color: palette.text[type].main,
          '& svg': {
            color: palette.text[type].main
          },
          '&:hover': {
            backgroundColor: palette.box.filled.focused
          },
          '&:active': {
            backgroundColor: palette.box.filled.pressed
          },
          '&:disabled': {
            backgroundColor: palette.box.filled.disabled,
            color: palette.text[type].text2,
            '& svg': {
              color: palette.text[type].text2
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
          padding: '18px 24px',
          borderRadius: 12,
          fontSize: p1.size,
          fontWeight: p1.weight.medium,
          lineHeight: p1.lineHeight.default,
          letterSpacing: p1.letterSpacing
        };
      case 'small':
        return {
          padding: '10px 15px',
          borderRadius: 8,
          fontSize: s1.size,
          fontWeight: s1.weight.medium,
          lineHeight: p1.lineHeight.default,
          letterSpacing: s1.letterSpacing
        };
      case 'pico':
        return {
          padding: '5px 10px',
          borderRadius: 6,
          fontSize: s1.size,
          fontWeight: s1.weight.medium,
          lineHeight: p1.lineHeight.default,
          letterSpacing: s1.letterSpacing
        };
      default:
        return {
          padding: '13px 21px',
          borderRadius: 10,
          fontSize: p2.size,
          fontWeight: p2.weight.medium,
          lineHeight: p1.lineHeight.default,
          letterSpacing: p2.letterSpacing
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
