import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

export const StyledPagination = styled.ul`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const PaginationItem = styled.li<{
  selected?: boolean;
  disabled?: boolean;
  isNextItemButton?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme: { type, palette } }) => palette.text[type].text1};
  cursor: pointer;

  & svg path {
    fill: ${({ theme: { type, palette } }) => palette.text[type].text1};
  }

  ${({ isNextItemButton }): CSSObject =>
    isNextItemButton
      ? {
          '& svg': {
            transform: 'rotate(180deg)'
          }
        }
      : {}};

  ${({ theme: { palette }, selected }): CSSObject =>
    selected
      ? {
          backgroundColor: palette.primary.main,
          color: palette.text.dark.main
        }
      : {}};

  ${({ theme: { type, palette }, disabled }): CSSObject =>
    disabled
      ? {
          color: palette.text[type].text3,
          '& svg path': {
            fill: palette.text[type].text3
          },
          cursor: 'default'
        }
      : {}};
`;
