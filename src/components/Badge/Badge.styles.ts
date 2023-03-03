import styled, { CSSObject } from '@emotion/styled';

import { BadgeProps } from '.';

const DefaultBadge = styled.div<{
  hasIcon: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: fit-content;
  padding: ${({ hasIcon }) => (hasIcon ? '1px 4px 1px 2px' : '1px 4px')};
  border-radius: 4px;
  white-space: nowrap;

  ${({
    theme: {
      typography: { s2 }
    }
  }): CSSObject => ({
    fontSize: s2.size,
    fontWeight: s2.weight.bold,
    letterSpacing: s2.letterSpacing,
    lineHeight: s2.lineHeight.default
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
            width: 14,
            height: 14,
            color: secondary.green.main
          }
        };
      case 'warning':
        return {
          backgroundColor: secondary.yellow.bg,
          color: secondary.yellow.main,
          '& svg': {
            width: 14,
            height: 14,
            color: secondary.yellow.main
          }
        };
      case 'error':
        return {
          backgroundColor: secondary.red.bg,
          color: secondary.red.main,
          '& svg': {
            width: 14,
            height: 14,
            color: secondary.red.main
          }
        };
      default:
        return {
          backgroundColor: primary.bg2,
          color: primary.main,
          '& svg': {
            width: 14,
            height: 14,
            color: primary.main
          }
        };
    }
  }};
`;
