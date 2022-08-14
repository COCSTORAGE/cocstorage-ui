import styled from '@emotion/styled';

export const StyledLinearProgress = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ theme: { palette } }) => palette.primary.bg1};
`;

export const ProgressBar = styled.div<{
  dataValue?: number;
}>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { palette } }) => palette.primary.main};

  transform: translateX(-${({ dataValue }) => dataValue}%);

  transition: transform 0.4s cubic-bezier(0, 0, 0.2, 1) 0ms;
`;
