import styled, { CSSObject } from '@emotion/styled';

import { Color } from '../../types';

import { TagProps } from '.';

const DefaultTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  padding: 7px 10px;
  border-radius: 8px;
  ${({
    theme: {
      typography: { p2 }
    }
  }): CSSObject => ({
    fontSize: p2.size,
    fontWeight: p2.weight.regular,
    letterSpacing: p2.letterSpacing,
    lineHeight: p2.lineHeight.default
  })}
`;

export const StyledTag = styled(DefaultTag)<
  Pick<TagProps, 'variant'> & {
    tagColor: Color;
  }
>`
  ${({
    theme: {
      mode,
      typography: { p2 },
      palette: { primary, box, text }
    },
    variant
  }): CSSObject => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: primary.main,
          color: text.dark.main,
          fontWeight: p2.weight.bold,
          '& svg': {
            color: text.dark.main
          }
        };
      case 'semiAccent':
        return {
          backgroundColor: primary.bg1,
          color: primary.main,
          fontWeight: p2.weight.bold,
          '& svg': {
            color: primary.main
          }
        };
      case 'transparent':
        return {
          backgroundColor: 'transparent',
          color: text[mode].text2,
          '& svg': {
            color: text[mode].text2
          }
        };
      default:
        return {
          backgroundColor: box.filled.normal,
          color: text[mode].main,
          '& svg': {
            color: text[mode].main
          }
        };
    }
  }}
`;
