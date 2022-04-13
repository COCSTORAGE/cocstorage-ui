import React, { memo, PropsWithChildren, ReactElement, HTMLAttributes, RefObject } from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { StyledButton } from './Button.styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  ref?: RefObject<HTMLButtonElement>;
  variant?: 'text' | 'accent' | 'semiAccent' | 'transparent';
  size?: 'big' | 'medium' | 'small' | 'pico';
  fullWidth?: boolean;
  startIcon?: ReactElement;
  iconOnly?: boolean;
  customStyle?: SerializedStyles;
}

function Button({
  ref,
  children,
  variant = 'text',
  size = 'medium',
  fullWidth = false,
  startIcon,
  iconOnly = false,
  customStyle,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const { theme } = useTheme();

  return (
    <StyledButton
      ref={ref}
      theme={theme}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      css={customStyle}
      {...props}
    >
      {startIcon && startIcon}
      {!iconOnly && children}
    </StyledButton>
  );
}

export default memo(Button);
