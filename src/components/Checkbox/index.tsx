import React, { useState, HTMLAttributes } from 'react';
import useTheme from '@theme/useTheme';

import { Wrapper, StyledCheckbox, Marker, MarkerInner, Check } from './Checkbox.styles';

export interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
}

function Checkbox({ checked, disabled, ...props }: CheckBoxProps) {
  const { theme } = useTheme();

  const [hover, setHover] = useState<boolean>(false);

  const handleHover = () => setHover(!hover);

  return (
    <Wrapper
      theme={theme}
      checked={checked}
      disabled={disabled}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      role="checkbox"
      tabIndex={0}
    >
      <StyledCheckbox type="checkbox" checked={checked} disabled={disabled} {...props} />
      <Marker>
        <MarkerInner>
          {!disabled && (hover || checked) && (
            <Check theme={theme} checked={checked} hover={hover} />
          )}
        </MarkerInner>
      </Marker>
    </Wrapper>
  );
}

export default Checkbox;
