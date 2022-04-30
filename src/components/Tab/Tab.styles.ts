import styled from '@emotion/styled';

const DefaultTab = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: none;
  border: none;
  padding-top: 11px;
  gap: 7px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.333333px;
`;

export const StyledTab = styled(DefaultTab)`
  color: ${({ theme: { type, palette } }) => palette.text[type].text2};

  &.selected {
    color: ${({ theme: { type, palette } }) => palette.text[type].main};

    & > div {
      visibility: visible;
    }
  }
`;

export const SelectedBar = styled.div`
  visibility: hidden;
  width: 14px;
  height: 3px;
  border-radius: 3px 3px 0 0;
  background-color: ${({ theme: { palette } }) => palette.primary.main};
`;
