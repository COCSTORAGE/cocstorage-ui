import React, { forwardRef, PropsWithChildren, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, Severity } from '../../types';
import { StyledBadge } from './Badge.styles';

export interface BadgeProps extends GenericComponentProps<HTMLAttributes<HTMLSpanElement>> {
  severity?: Exclude<Severity, 'normal'>;
  startIcon?: ReactElement;
  iconOnly?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, PropsWithChildren<BadgeProps>>(function Badge(
  { children, severity, startIcon, iconOnly = false, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  return (
    <StyledBadge ref={ref} theme={theme} severity={severity} css={customStyle} {...props}>
      {startIcon}
      {!iconOnly && children}
    </StyledBadge>
  );
});

export default Badge;
