import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

import { AlertProps } from '.';

export const StyledAlert = styled.div<Pick<AlertProps, 'severity'>>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-width: 0;
  padding: 0 20px;
  height: 50px;
  border-radius: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ theme: { palette }, severity }): CSSObject => {
    switch (severity) {
      case 'success':
        return {
          backgroundColor: palette.secondary.green.bg,
          color: palette.secondary.green.main,
          '& svg path': {
            fill: palette.secondary.green.main
          }
        };
      case 'warning':
        return {
          backgroundColor: palette.secondary.yellow.bg,
          color: palette.secondary.yellow.main,
          '& svg path': {
            fill: palette.secondary.yellow.main
          }
        };
      case 'error':
        return {
          backgroundColor: palette.secondary.red.bg,
          color: palette.secondary.red.main,
          '& svg path': {
            fill: palette.secondary.red.main
          }
        };
      default:
        return {
          backgroundColor: palette.primary.bg2,
          color: palette.primary.main,
          '& svg path': {
            fill: palette.primary.main
          }
        };
    }
  }};
`;

export const Message = styled.div`
  flex: 1;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.04em;
`;
