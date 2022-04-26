import React, { memo, PropsWithChildren, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledBadge } from './Badge.styles';

export interface BadgeProps extends GenericComponentProps<HTMLAttributes<HTMLLabelElement>> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  startIcon?: ReactElement;
  iconOnly?: boolean;
}

function Badge({
  children,
  variant,
  startIcon,
  iconOnly = false,
  customStyle,
  ...props
}: PropsWithChildren<BadgeProps>) {
  const { theme } = useTheme();

  return (
    <StyledBadge theme={theme} variant={variant} css={customStyle} {...props}>
      {startIcon}
      {!iconOnly && children}
    </StyledBadge>
  );
}

export default memo(Badge);
