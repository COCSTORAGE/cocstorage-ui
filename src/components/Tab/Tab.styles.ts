import styled from '@emotion/styled';

export const StyledTab = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 11px;
  gap: 7px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: ${({ theme: { palette } }) => palette.text.light.text2};

  &.selected {
    color: ${({ theme: { palette } }) => palette.text.light.main};

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
