import styled, { CSSObject } from '@emotion/styled';

import { ButtonProps } from '.';
import { BrandColor } from '../../types';

const DefaultButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  text-align: center;
  border: none;
  background: none;
  font-weight: 500;
  cursor: pointer;
`;

export const StyledButton = styled(DefaultButton)<
  Pick<ButtonProps, 'size' | 'fullWidth'> & {
    brandColor: BrandColor;
  }
>`
  ${({ theme: { type, palette }, brandColor }) => {
    switch (brandColor) {
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
            color: palette.text[type].text2
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
            color: palette.text[type].text2
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
            color: palette.text[type].text2
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
            color: palette.text[type].text2
          }
        };
    }
  }}

  ${({ size }): CSSObject => {
    switch (size) {
      case 'big':
        return {
          padding: '18px 24px',
          borderRadius: 12,
          lineHeight: '20px',
          fontSize: 16
        };
      case 'small':
        return {
          padding: '10px 15px',
          borderRadius: 8,
          lineHeight: '15px',
          fontSize: 12
        };
      case 'pico':
        return {
          padding: '5px 10px',
          borderRadius: 6,
          lineHeight: '15px',
          fontSize: 12
        };
      default:
        return {
          padding: '13px 21px',
          borderRadius: 10,
          lineHeight: '18px',
          fontSize: 14
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
