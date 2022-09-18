import styled, { CSSObject } from '@emotion/styled';

import { BadgeProps } from '.';

const DefaultBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: fit-content;
  padding: 2px 4.7px;
  border-radius: 4px;
  white-space: nowrap;
  ${({
    theme: {
      typography: { s2 }
    }
  }): CSSObject => ({
    fontSize: s2.size,
    fontWeight: s2.weight.bold,
    letterSpacing: s2.letterSpacing
  })}
`;

export const StyledBadge = styled(DefaultBadge)<Pick<BadgeProps, 'severity'>>`
  ${({
    theme: {
      palette: { primary, secondary }
    },
    severity
  }): CSSObject => {
    switch (severity) {
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
          backgroundColor: primary.bg2,
          color: primary.main,
          '& svg': {
            color: primary.main
          }
        };
    }
  }};
`;
