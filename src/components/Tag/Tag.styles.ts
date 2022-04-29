import styled, { CSSObject } from '@emotion/styled';

import { Color } from '../../types';

const DefaultTag = styled.label`
  display: inline-block;
  width: fit-content;
  padding: 7px 10px;
  border-radius: 8px;
  line-height: 18px;
  font-size: 14px;
  cursor: default;
`;

export const StyledTag = styled(DefaultTag)<{
  tagColor: Color;
}>`
  ${({ theme: { type, palette }, tagColor }): CSSObject => {
    switch (tagColor) {
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

export const TagInner = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
