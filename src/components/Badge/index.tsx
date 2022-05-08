import React, { forwardRef, PropsWithChildren, ReactElement, HTMLAttributes } from 'react';

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
  return (
    <StyledBadge ref={ref} severity={severity} css={customStyle} {...props}>
      {startIcon}
      {!iconOnly && children}
    </StyledBadge>
  );
});

export default Badge;
