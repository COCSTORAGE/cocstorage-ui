import React, { HTMLAttributes, MouseEvent } from 'react';
import useTheme from '@theme/useTheme';

import { StyledSwitch, Circle } from './Switch.styles';

export interface SwitchProps extends HTMLAttributes<HTMLDivElement> {
  checked: boolean;
  disabled?: boolean;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

function Switch({ checked, disabled, onClick, ...props }: SwitchProps) {
  const { theme } = useTheme();

  return (
    <StyledSwitch
      theme={theme}
      checked={checked}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      <Circle theme={theme} checked={checked} disabled={disabled} />
    </StyledSwitch>
  );
}

export default Switch;
