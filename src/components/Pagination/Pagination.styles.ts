import styled, { CSSObject } from '@emotion/styled';

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
  min-width: 24px;
  padding: 3px 7px;
  border-radius: 6px;

  ${({
    theme: {
      typography: { p2 }
    }
  }): CSSObject => ({
    fontSize: p2.size,
    fontWeight: p2.weight.medium,
    letterSpacing: p2.letterSpacing
  })}

  color: ${({
    theme: {
      mode,
      palette: { text }
    }
  }) => text[mode].text1};
  cursor: pointer;

  & svg {
    color: ${({
      theme: {
        mode,
        palette: { text }
      }
    }) => text[mode].text1};
  }

  ${({ isNextItemButton }): CSSObject =>
    isNextItemButton
      ? {
          '& svg': {
            transform: 'rotate(180deg)'
          }
        }
      : {}};

  ${({
    theme: {
      typography: { p2 },
      palette: { primary, text }
    },
    selected
  }): CSSObject =>
    selected
      ? {
          backgroundColor: primary.main,
          fontWeight: p2.weight.bold,
          color: text.dark.main
        }
      : {}};

  ${({
    theme: {
      mode,
      palette: { text }
    },
    disabled
  }): CSSObject =>
    disabled
      ? {
          color: text[mode].text3,
          '& svg': {
            color: text[mode].text3
          }
        }
      : {}};
`;

export const PaginationDot = styled.li`
  width: 2px;
  height: 2px;
  margin: 0 7px;
  border-radius: 50%;
  background-color: ${({
    theme: {
      mode,
      palette: { text }
    }
  }) => text[mode].text1};
`;
