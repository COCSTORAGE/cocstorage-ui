import React, { memo, PropsWithChildren, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, Severity } from '../../types';
import { StyledBadge, BadgeInner } from './Badge.styles';

export interface BadgeProps
  extends GenericComponentProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  severity?: Exclude<Severity, 'normal'>;
  startIcon?: ReactElement;
  iconOnly?: boolean;
}

function Badge({
  children,
  ref,
  severity,
  startIcon,
  iconOnly = false,
  customStyle,
  ...props
}: PropsWithChildren<BadgeProps>) {
  const { theme } = useTheme();

  return (
    <StyledBadge ref={ref} theme={theme} severity={severity} css={customStyle} {...props}>
      <BadgeInner>
        {startIcon}
        {!iconOnly && children}
      </BadgeInner>
    </StyledBadge>
  );
}

export default memo(Badge);
