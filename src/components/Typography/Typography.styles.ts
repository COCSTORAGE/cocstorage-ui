import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledTypography = styled.h1<{
  textFontSize?: string;
  textFontWeight?: number;
  textLineHeight?: string;
  textColor?: string;
  textLetterSpacing?: string;
}>`
  color: ${({ theme: { type, palette } }) => palette.text[type].main};

  ${({ textFontSize }) =>
    textFontSize
      ? css`
          font-size: ${textFontSize};
        `
      : ''};

  ${({ textFontWeight }) =>
    textFontWeight
      ? css`
          font-weight: ${textFontWeight};
        `
      : ''};

  ${({ textLineHeight }) =>
    textLineHeight
      ? css`
          line-height: ${textLineHeight};
        `
      : ''};

  ${({ textColor }) =>
    textColor
      ? css`
          color: ${textColor};
        `
      : ''};

  ${({ textLetterSpacing }) =>
    textLetterSpacing
      ? css`
          letter-spacing: ${textLetterSpacing};
        `
      : ''};

  & > strong {
    font-weight: 700;
  }

  & > a {
    text-decoration: underline;
  }
`;
