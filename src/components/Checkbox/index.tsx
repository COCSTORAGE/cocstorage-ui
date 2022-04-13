import React, { useState, useCallback, memo, HTMLAttributes, RefObject } from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { Wrapper, StyledCheckbox, Marker, MarkerInner, Check } from './Checkbox.styles';

export interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement>;
  checked: boolean;
  disabled?: boolean;
  customStyle?: SerializedStyles;
}

function Checkbox({ ref, checked, disabled, customStyle, ...props }: CheckBoxProps) {
  const { theme } = useTheme();

  const [hover, setHover] = useState<boolean>(false);

  const handleMouseOver = useCallback(() => setHover(true), []);
  const handleMouseOut = useCallback(() => setHover(false), []);

  return (
    <Wrapper
      ref={ref}
      theme={theme}
      css={customStyle}
      checked={checked}
      disabled={disabled}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
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

export default memo(Checkbox);
