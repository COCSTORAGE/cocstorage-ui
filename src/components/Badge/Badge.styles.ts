import styled, { CSSObject } from '@emotion/styled';

import { BadgeProps } from '.';

const DefaultBadge = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0 4.7px;
  gap: 2px;
  height: 16px;
  line-height: 18px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: -0.6px;
  white-space: nowrap;
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
