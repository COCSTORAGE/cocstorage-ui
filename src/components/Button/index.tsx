import React, { memo, PropsWithChildren, ReactElement, ButtonHTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, ComponentColor, Size } from '../../types';
import { StyledButton } from './Button.styles';

export interface ButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: ComponentColor;
  size?: Size;
  fullWidth?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  iconOnly?: boolean;
}

export type RequireAtOnlyOneIcon<T> = T &
  (
    | {
        iconOnly?: boolean;
        startIcon: ReactElement;
        endIcon?: never;
      }
    | {
        iconOnly?: boolean;
        startIcon?: never;
        endIcon: ReactElement;
      }
    | {
        iconOnly?: never;
        startIcon?: ReactElement;
        endIcon?: ReactElement;
      }
  );

function Button({
  children,
  ref,
  color = 'text',
  size = 'medium',
  fullWidth = false,
  startIcon,
  endIcon,
  iconOnly = false,
  customStyle,
  ...props
}: PropsWithChildren<RequireAtOnlyOneIcon<ButtonProps>>) {
  const { theme } = useTheme();

  return (
    <StyledButton
      ref={ref}
      theme={theme}
      color={color}
      size={size}
      fullWidth={fullWidth}
      css={customStyle}
      {...props}
    >
      {startIcon}
      {!iconOnly && children}
      {endIcon}
    </StyledButton>
  );
}

export default memo(Button);
