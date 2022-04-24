import React, {
  useState,
  useRef,
  useCallback,
  memo,
  HTMLAttributes,
  RefObject,
  ReactElement
} from 'react';
import useTheme from '@theme/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledTextBar, Input, Label, StartIconWrapper } from './TextBar.styles';

export interface TextBarProps extends GenericComponentProps<HTMLAttributes<HTMLInputElement>> {
  ref?: RefObject<HTMLInputElement>;
  variant?: 'filled' | 'focused';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  startIcon?: ReactElement;
  label?: string;
  value: string;
}

function TextBar({
  ref,
  variant = 'filled',
  size = 'medium',
  fullWidth,
  startIcon,
  label,
  value,
  placeholder,
  customStyle,
  ...props
}: TextBarProps) {
  const { theme } = useTheme();

  const TextBarRef = useRef<HTMLInputElement | null>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = useCallback(() => setIsFocused(!isFocused), [isFocused]);

  return (
    <StyledTextBar
      ref={ref}
      theme={theme}
      css={customStyle}
      fullWidth={fullWidth}
      variant={variant}
      isFocused={isFocused}
      textBarSize={size}
    >
      {startIcon && <StartIconWrapper size={size}>{startIcon}</StartIconWrapper>}
      <Input
        ref={TextBarRef}
        theme={theme}
        fullWidth={fullWidth}
        hasStartIcon={!!startIcon}
        value={value}
        placeholder={label ? undefined : placeholder}
        onFocus={handleFocus}
        onBlur={handleFocus}
        {...props}
      />
      {label && (
        <Label
          theme={theme}
          variant={variant}
          size={size}
          isFocused={isFocused}
          hasValue={!!value || !!startIcon}
        >
          {label}
        </Label>
      )}
    </StyledTextBar>
  );
}

export default memo(TextBar);
