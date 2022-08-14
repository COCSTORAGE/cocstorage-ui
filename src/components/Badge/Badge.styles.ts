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
  ${({ theme: { palette }, severity }): CSSObject => {
    switch (severity) {
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
          backgroundColor: palette.primary.bg2,
          color: palette.primary.main,
          '& svg': {
            color: palette.primary.main
          }
        };
    }
  }};
`;
