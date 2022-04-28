import styled, { CSSObject } from '@emotion/styled';

import { AlertProps } from '.';

const DefaultAlert = styled.div`
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
`;

export const StyledAlert = styled(DefaultAlert)<Pick<AlertProps, 'severity'>>`
  ${({ theme: { type, palette }, severity }): CSSObject => {
    switch (severity) {
      case 'info':
        return {
          backgroundColor: palette.primary.bg2,
          color: palette.primary.main,
          '& svg': {
            color: palette.primary.main
          }
        };
      case 'success':
        return {
          backgroundColor: palette.secondary.green.bg,
          color: palette.secondary.green.main,
          '& svg': {
            color: palette.secondary.green.main
          }
        };
      case 'warning':
        return {
          backgroundColor: palette.secondary.yellow.bg,
          color: palette.secondary.yellow.main,
          '& svg': {
            color: palette.secondary.yellow.main
          }
        };
      case 'error':
        return {
          backgroundColor: palette.secondary.red.bg,
          color: palette.secondary.red.main,
          '& svg': {
            color: palette.secondary.red.main
          }
        };
      default:
        return {
          backgroundColor: palette.box.filled.normal,
          color: palette.text[type].main,
          '& svg': {
            color: palette.text[type].main
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
