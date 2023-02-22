import styled, { CSSObject } from '@emotion/styled';

const DefaultTab = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: none;
  border: none;
  padding: 10px 10px 0;
  gap: 10px;
  text-align: center;
  ${({
    theme: {
      typography: { p2 }
    }
  }): CSSObject => ({
    fontSize: p2.size,
    fontWeight: p2.weight.medium,
    letterSpacing: p2.letterSpacing
  })}
`;

export const StyledTab = styled(DefaultTab)`
  color: ${({
    theme: {
      mode,
      palette: { text }
    }
  }) => text[mode].text2};

  &.selected {
    color: ${({
      theme: {
        mode,
        palette: { text }
      }
    }) => text[mode].main};

    & > div {
      visibility: visible;
    }
  }
`;

export const SelectedBar = styled.div`
  visibility: hidden;
  width: 100%;
  height: 3px;
  background-color: ${({
    theme: {
      palette: { primary }
    }
  }) => primary.main};
`;
