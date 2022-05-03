import React, { memo, PropsWithChildren, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, Severity } from '../../types';
import { StyledBadge } from './Badge.styles';

export interface BadgeProps
  extends GenericComponentProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  severity?: Exclude<Severity, 'normal'>;
  startIcon?: ReactElement;
  iconOnly?: boolean;
}

function Badge({
  children,
  componentRef,
  severity,
  startIcon,
  iconOnly = false,
  customStyle,
  ...props
}: PropsWithChildren<BadgeProps>) {
  const { theme } = useTheme();

  return (
    <StyledBadge ref={componentRef} theme={theme} severity={severity} css={customStyle} {...props}>
      {startIcon}
      {!iconOnly && children}
    </StyledBadge>
  );
}

export default memo(Badge);
