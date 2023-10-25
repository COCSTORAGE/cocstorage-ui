import { InputHTMLAttributes, ReactElement, forwardRef, useRef, useState } from 'react';

import { GenericComponentProps, Size, TextBarVariant } from '@typings';

import { EndIconWrapper, Input, Label, StartIconWrapper, StyledTextBar } from './TextBar.styles';

export interface TextBarProps
  extends GenericComponentProps<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>> {
  variant?: TextBarVariant;
  size?: Exclude<Size, 'pico'>;
  fullWidth?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  label?: string;
  value: string;
}

const TextBar = forwardRef<HTMLInputElement, TextBarProps>(function TextBar(
  {
    variant = 'outline',
    size = 'medium',
    fullWidth,
    startIcon,
    endIcon,
    label,
    value = '',
    placeholder,
    customStyle,
    ...props
  },
  ref
) {
  const TextBarRef = useRef<HTMLInputElement | null>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(!isFocused);

  return (
    <StyledTextBar
      ref={ref}
      css={customStyle}
      variant={variant}
      fullWidth={fullWidth}
      isFocused={isFocused}
      size={size}
    >
      {startIcon && <StartIconWrapper size={size}>{startIcon}</StartIconWrapper>}
      <Input
        ref={TextBarRef}
        fullWidth={fullWidth}
        textBarSize={size}
        hasStartIcon={!!startIcon}
        hasEndIcon={!!endIcon}
        value={value}
        placeholder={label ? undefined : placeholder}
        onFocus={handleFocus}
        onBlur={handleFocus}
        {...props}
      />
      {endIcon && <EndIconWrapper size={size}>{endIcon}</EndIconWrapper>}
      {label && (
        <Label size={size} isFocused={isFocused} hasValue={!!value || !!startIcon}>
          {label}
        </Label>
      )}
    </StyledTextBar>
  );
});

export default TextBar;
