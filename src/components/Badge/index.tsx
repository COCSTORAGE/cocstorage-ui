import React, { memo, PropsWithChildren, RefObject, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledBadge } from './Badge.styles';

export interface BadgeProps extends GenericComponentProps<HTMLAttributes<HTMLLabelElement>> {
  ref?: RefObject<HTMLLabelElement>;
  variant?: 'info' | 'success' | 'warning' | 'error';
  startIcon?: ReactElement;
  iconOnly?: boolean;
}

function Badge({
  children,
  ref,
  variant,
  startIcon,
  iconOnly = false,
  customStyle,
  ...props
}: PropsWithChildren<BadgeProps>) {
  const { theme } = useTheme();

  return (
    <StyledBadge ref={ref} theme={theme} variant={variant} css={customStyle} {...props}>
      {startIcon}
      {!iconOnly && children}
    </StyledBadge>
  );
}

export default memo(Badge);
