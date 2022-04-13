import React, { memo, HTMLAttributes, MouseEvent, RefObject } from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { StyledSwitch, Circle } from './Switch.styles';

export interface SwitchProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  ref?: RefObject<HTMLButtonElement>;
  checked: boolean;
  disabled?: boolean;
  onChange: (event: MouseEvent<HTMLButtonElement>) => void;
  customStyle?: SerializedStyles;
}

function Switch({ ref, checked, disabled, onChange, customStyle, ...props }: SwitchProps) {
  const { theme } = useTheme();

  return (
    <StyledSwitch
      ref={ref}
      theme={theme}
      css={customStyle}
      checked={checked}
      disabled={disabled}
      onClick={!disabled ? onChange : undefined}
      role="switch"
      {...props}
    >
      <Circle theme={theme} checked={checked} disabled={disabled} />
    </StyledSwitch>
  );
}

export default memo(Switch);
