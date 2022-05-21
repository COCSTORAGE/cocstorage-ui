import styled from '@emotion/styled';

import { LinearProgressProps } from '.';

export const StyledLinearProgress = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ theme: { palette } }) => palette.primary.bg1};
`;

export const ProgressBar = styled.div<Pick<LinearProgressProps, 'value'>>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { palette } }) => palette.primary.main};

  transform: translateX(-${({ value }) => value}%);

  transition: transform 0.4s cubic-bezier(0, 0, 0.2, 1) 0ms;
`;
