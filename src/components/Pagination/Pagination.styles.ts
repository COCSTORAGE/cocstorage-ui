import styled, { CSSObject } from '@emotion/styled';

export const StyledPagination = styled.ul`
  display: flex;
  align-items: center;
  gap: 2px;
  user-select: none;
`;

export const PaginationItem = styled.li<{
  selected?: boolean;
  disabled?: boolean;
  isNextItemButton?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 7px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme: { type, palette } }) => palette.text[type].text1};
  cursor: pointer;

  & svg {
    color: ${({ theme: { type, palette } }) => palette.text[type].text1};
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
          '& svg': {
            color: palette.text[type].text3
          },
          cursor: 'default'
        }
      : {}};
`;

export const PaginationDot = styled.li`
  width: 2px;
  height: 2px;
  margin: 0 7px;
  border-radius: 50%;
  background-color: ${({ theme: { type, palette } }) => palette.text[type].text1};
`;
