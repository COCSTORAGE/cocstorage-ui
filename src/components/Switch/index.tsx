import React, { memo, HTMLAttributes, MouseEvent, RefObject } from 'react';
import useTheme from '@theme/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledSwitch, Circle } from './Switch.styles';

export interface SwitchProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange'>> {
  ref?: RefObject<HTMLButtonElement>;
  checked: boolean;
  disabled?: boolean;
  onChange: (event: MouseEvent<HTMLButtonElement>) => void;
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
