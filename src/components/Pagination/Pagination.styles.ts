import styled from '@emotion/styled';
import { css } from '@emotion/react';

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

  ${({ isNextItemButton }) =>
    isNextItemButton
      ? css`
          & svg {
            transform: rotate(180deg);
          }
        `
      : ''};

  ${({ theme: { type, palette }, selected }) =>
    selected
      ? css`
          background-color: ${palette.primary.main};
          color: ${palette.text[type].main};
        `
      : ''};

  ${({ theme: { type, palette }, disabled }) =>
    disabled
      ? css`
          color: ${palette.text[type].text3};
          & svg path {
            fill: ${palette.text[type].text3};
          }
          cursor: default;
        `
      : ''};
`;
