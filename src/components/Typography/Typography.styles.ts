import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCode } from '@utils';
import { CSSValue, Color, TypographyLineHeight, TypographyWeight } from 'src/typings';

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
    letterSpacing: typography[variant].letterSpacing,
    lineHeight: typography[variant].lineHeight.default
  })};

  ${({ theme: { typography }, variant = 'p2', textLineHeight }): CSSObject =>
    textLineHeight
      ? {
          lineHeight: typography[variant].lineHeight[textLineHeight]
        }
      : {}};

  ${({ textLetterSpacing }): CSSObject =>
    textLetterSpacing
      ? {
          letterSpacing: textLetterSpacing
        }
      : {}};

  color: ${({
    theme: {
      mode,
      palette: { text }
    }
  }) => text[mode].main};

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
    noWrap && lineClamp
      ? {
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: lineClamp
        }
      : {}};

  ${({ noWrap, lineClamp }): CSSObject =>
    noWrap && !lineClamp
      ? {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      : {}};
`;
