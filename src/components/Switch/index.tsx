import React, { memo, HTMLAttributes, MouseEvent } from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { StyledSwitch, Circle } from './Switch.styles';

export interface SwitchProps extends HTMLAttributes<HTMLButtonElement> {
  checked: boolean;
  disabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  customStyle?: SerializedStyles;
}

function Switch({ checked, disabled, onClick, customStyle, ...props }: SwitchProps) {
  const { theme } = useTheme();

  return (
    <StyledSwitch
      theme={theme}
      css={customStyle}
      checked={checked}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      role="switch"
      {...props}
    >
      <Circle theme={theme} checked={checked} disabled={disabled} />
    </StyledSwitch>
  );
}

export default memo(Switch);
