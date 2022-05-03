import React, {
  useState,
  useRef,
  useCallback,
  memo,
  InputHTMLAttributes,
  ReactElement
} from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, Size } from '../../types';
import { StyledTextBar, Input, Label, StartIconWrapper } from './TextBar.styles';

export interface TextBarProps
  extends GenericComponentProps<
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    HTMLInputElement
  > {
  size?: Exclude<Size, 'pico'>;
  fullWidth?: boolean;
  startIcon?: ReactElement;
  label?: string;
  value: string;
}

function TextBar({
  componentRef,
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
      ref={componentRef}
      theme={theme}
      css={customStyle}
      fullWidth={fullWidth}
      isFocused={isFocused}
      size={size}
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
        <Label theme={theme} size={size} isFocused={isFocused} hasValue={!!value || !!startIcon}>
          {label}
        </Label>
      )}
    </StyledTextBar>
  );
}

export default memo(TextBar);
