import { ButtonHTMLAttributes, PropsWithChildren, ReactElement, forwardRef } from 'react';

import { BrandColor, GenericComponentProps, Size, Variant } from '../../types';
import { StyledButton } from './Button.styles';

export interface ButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: Variant;
  color?: BrandColor;
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

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<RequireAtOnlyOneIcon<ButtonProps>>>(
  function Button(
    {
      children,
      variant = 'text',
      color = 'primary',
      size = 'medium',
      fullWidth = false,
      startIcon,
      endIcon,
      iconOnly = false,
      customStyle,
      ...props
    },
    ref
  ) {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        brandColor={color}
        size={size}
        fullWidth={fullWidth}
        {...props}
        css={customStyle}
      >
        {startIcon}
        {!iconOnly && children}
        {endIcon}
      </StyledButton>
    );
  }
);

export default Button;
