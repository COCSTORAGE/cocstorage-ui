import React, { forwardRef, ButtonHTMLAttributes, MouseEvent } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledSwitch, Circle } from './Switch.styles';

export interface SwitchProps
  extends GenericComponentProps<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange'>
  > {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { checked, disabled, onChange, customStyle, ...props },
  ref
) {
  return (
    <StyledSwitch
      ref={ref}
      css={customStyle}
      checked={checked}
      disabled={disabled}
      onClick={!disabled ? onChange : undefined}
      {...props}
      role="switch"
    >
      <Circle checked={checked} disabled={disabled} />
    </StyledSwitch>
  );
});

export default Switch;
