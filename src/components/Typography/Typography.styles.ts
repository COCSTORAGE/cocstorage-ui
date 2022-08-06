import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCode } from '@utils';

import { CSSValue, Color, TypographyLineHeight, TypographyWeight } from '../../types';

import { TypographyProps } from '.';

export const StyledTypography = styled.h1<
  Pick<TypographyProps, 'variant' | 'noWrap' | 'lineClamp'> & {
    textFontWeight?: keyof TypographyWeight;
    textLineHeight?: keyof TypographyLineHeight;
    textLetterSpacing?: CSSValue;
    textColor?: Color;
  }
>`
  ${({ theme: { typography }, variant = 'p2', textFontWeight = 'regular' }): CSSObject => ({
    fontSize: typography[variant].size,
    fontWeight: typography[variant].weight[textFontWeight],
    letterSpacing: typography[variant].letterSpacing
  })};

  ${({ theme: { typography }, variant = 'p2', textLineHeight }) =>
    textLineHeight
      ? {
          lineHeight: typography[variant].lineHeight[textLineHeight]
        }
      : {}};

  ${({ textLetterSpacing }) =>
    textLetterSpacing
      ? {
          letterSpacing: textLetterSpacing
        }
      : {}};

  color: ${({ theme: { type, palette } }) => palette.text[type].main};

  ${({ theme, textColor }): CSSObject => {
    const brandColorCode = getBrandColorCode(theme, textColor);

    if (brandColorCode) {
      return {
        color: brandColorCode
      };
    }

    return {
      color: textColor
    };
  }};

  ${({ noWrap, lineClamp }): CSSObject =>
    noWrap
      ? {
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: lineClamp
        }
      : {}};
`;
