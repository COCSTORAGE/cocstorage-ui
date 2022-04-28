import React, { useState, useCallback, memo, InputHTMLAttributes, RefObject } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledCheckbox, Marker, MarkerInner, Check } from './Checkbox.styles';

export interface CheckboxProps
  extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {
  ref?: RefObject<HTMLInputElement>;
}

function Checkbox({ ref, checked, disabled, customStyle, ...props }: CheckboxProps) {
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
