import React, { PropsWithChildren, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/useTheme';

import { StyledButton } from './Button.styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'accent' | 'semiAccent' | 'transparent';
  size?: 'big' | 'medium' | 'small' | 'pico';
  fullWidth?: boolean;
  startIcon?: ReactElement;
  iconOnly?: boolean;
}

function Button({
  children,
  variant = 'text',
  size = 'medium',
  fullWidth = false,
  startIcon,
  iconOnly = false,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const { theme } = useTheme();

  return (
    <StyledButton
      theme={theme}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      hasStartIcon={!!startIcon}
      {...props}
    >
      {startIcon && startIcon}
      {!iconOnly && children}
    </StyledButton>
  );
}

export default Button;
