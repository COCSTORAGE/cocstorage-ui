import styled, { CSSObject } from '@emotion/styled';

import { CSSValue, Color } from '../../types';

import { TypographyProps } from '.';

export const StyledTypography = styled.h1<
  Pick<TypographyProps, 'noWrap' | 'lineClamp'> & {
    textFontSize?: CSSValue;
    textFontWeight?: number;
    textLineHeight?: CSSValue;
    textColor?: Color;
    textLetterSpacing?: CSSValue;
  }
>`
  color: ${({ theme: { type, palette } }) => palette.text[type].main};

  ${({ textFontSize }): CSSObject =>
    textFontSize
      ? {
          fontSize: textFontSize
        }
      : {}};

  ${({ textFontWeight }): CSSObject =>
    textFontWeight
      ? {
          fontWeight: textFontWeight
        }
      : {}};

  ${({ textLineHeight }) =>
    textLineHeight
      ? {
          lineHeight: textLineHeight
        }
      : {}};

  ${({ textColor }) =>
    textColor
      ? {
          color: textColor
        }
      : {}};

  ${({ textLetterSpacing }) =>
    textLetterSpacing
      ? {
          letterSpacing: textLetterSpacing
        }
      : {}};

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

  & > strong {
    font-weight: 700;
  }

  & > a {
    text-decoration: underline;
  }
`;
