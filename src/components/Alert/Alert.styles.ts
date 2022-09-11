import styled, { CSSObject } from '@emotion/styled';

import { AlertProps } from '.';

const DefaultAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-width: 0;
  min-height: 50px;
  padding: 16px 20px;
  border-radius: 12px;
`;

export const StyledAlert = styled(DefaultAlert)<Pick<AlertProps, 'severity'>>`
  ${({
    theme: {
      mode,
      palette: { primary, secondary, box, text }
    },
    severity
  }): CSSObject => {
    switch (severity) {
      case 'info':
        return {
          backgroundColor: primary.bg2,
          color: primary.main,
          '& svg': {
            color: primary.main
          }
        };
      case 'success':
        return {
          backgroundColor: secondary.green.bg,
          color: secondary.green.main,
          '& svg': {
            color: secondary.green.main
          }
        };
      case 'warning':
        return {
          backgroundColor: secondary.yellow.bg,
          color: secondary.yellow.main,
          '& svg': {
            color: secondary.yellow.main
          }
        };
      case 'error':
        return {
          backgroundColor: secondary.red.bg,
          color: secondary.red.main,
          '& svg': {
            color: secondary.red.main
          }
        };
      default:
        return {
          backgroundColor: box.filled.normal,
          color: text[mode].main,
          '& svg': {
            color: text[mode].main
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
    letterSpacing: p2.letterSpacing
  })}
`;
