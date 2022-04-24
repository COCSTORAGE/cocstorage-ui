import styled, { CSSObject } from '@emotion/styled';

import { TagProps } from '.';

const DefaultTag = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  padding: 7px 10px;
  border-radius: 8px;
  line-height: 18px;
  font-size: 14px;
  cursor: default;
`;

export const StyledTag = styled(DefaultTag)<Pick<TagProps, 'variant'>>`
  ${({ theme: { type, palette }, variant }): CSSObject => {
    switch (variant) {
      case 'semiAccent':
        return {
          backgroundColor: palette.primary.bg1,
          color: palette.primary.main,
          fontWeight: 700,
          '& svg path': {
            fill: palette.primary.main
          }
        };
      case 'transparent':
        return {
          backgroundColor: 'transparent',
          color: palette.text[type].text2,
          '& svg path': {
            fill: palette.text[type].text2
          }
        };
      default:
        return {
          backgroundColor: palette.box.filled.normal,
          color: palette.text[type].main,
          '& svg path': {
            fill: palette.text[type].main
          }
        };
    }
  }}
`;
