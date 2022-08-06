import styled, { CSSObject } from '@emotion/styled';

import { AlertProps } from '.';

const DefaultAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-width: 0;
  min-height: 56px;
  padding: 16px 20px;
  border-radius: 12px;
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
  word-break: break-all;
  text-align: left;
  ${({
    theme: {
      typography: { p2 }
    }
  }): CSSObject => ({
    fontSize: p2.size,
    fontWeight: p2.weight.regular,
    lineHeight: p2.lineHeight.default,
    letterSpacing: p2.letterSpacing
  })}
`;
