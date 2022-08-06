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
  ${({
    theme: { typography },
    variant = 'p2',
    textFontWeight = 'regular',
    textLineHeight = 'default'
  }): CSSObject => ({
    fontSize: typography[variant].size,
    fontWeight: typography[variant].weight[textFontWeight],
    lineHeight: typography[variant].lineHeight[textLineHeight],
    letterSpacing: typography[variant].letterSpacing
  })};

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
