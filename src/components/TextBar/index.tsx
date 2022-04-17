import React, { useState, useRef, useCallback, memo, HTMLAttributes, RefObject } from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { Wrapper, StyledTextBar, Label } from './TextBar.styles';

export interface TextBarProps extends HTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement>;
  variant?: 'filled' | 'focused';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  label?: string;
  value: string;
  customStyle?: SerializedStyles;
}

function TextBar({
  ref,
  variant = 'filled',
  size = 'medium',
  fullWidth,
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
    <Wrapper ref={ref} fullWidth={fullWidth}>
      <StyledTextBar
        ref={TextBarRef}
        theme={theme}
        variant={variant}
        textBarSize={size}
        fullWidth={fullWidth}
        value={value}
        placeholder={label ? undefined : placeholder}
        onFocus={handleFocus}
        onBlur={handleFocus}
        css={customStyle}
        {...props}
      />
      {label && (
        <Label theme={theme} variant={variant} size={size} isFocused={isFocused} hasValue={!!value}>
          {label}
        </Label>
      )}
    </Wrapper>
  );
}

export default memo(TextBar);
