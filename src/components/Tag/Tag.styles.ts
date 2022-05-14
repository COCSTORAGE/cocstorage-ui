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
  line-height: 18px;
  font-size: 14px;
  cursor: default;
`;

export const StyledTag = styled(DefaultTag)<
  Pick<TagProps, 'variant'> & {
    tagColor: Color;
  }
>`
  ${({ theme: { type, palette }, variant }): CSSObject => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: palette.primary.main,
          color: palette.text.dark.main,
          fontWeight: 700,
          '& svg': {
            color: palette.text.dark.main
          }
        };
      case 'semiAccent':
        return {
          backgroundColor: palette.primary.bg1,
          color: palette.primary.main,
          fontWeight: 700,
          '& svg': {
            color: palette.primary.main
          }
        };
      case 'transparent':
        return {
          backgroundColor: 'transparent',
          color: palette.text[type].text2,
          '& svg': {
            color: palette.text[type].text2
          }
        };
      default:
        return {
          backgroundColor: palette.box.filled.normal,
          color: palette.text[type].main,
          '& svg': {
            color: palette.text[type].main
          }
        };
    }
  }}
`;
