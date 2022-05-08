import React, { useState, forwardRef, InputHTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledCheckbox, Marker, MarkerInner, Check } from './Checkbox.styles';

export interface CheckboxProps
  extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { checked, disabled, customStyle, ...props },
  ref
) {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  return (
    <Wrapper
      ref={ref}
      css={customStyle}
      checked={checked}
      disabled={disabled}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      role="checkbox"
    >
      <StyledCheckbox type="checkbox" checked={checked} disabled={disabled} {...props} />
      <Marker>
        <MarkerInner>
          {!disabled && (hover || checked) && <Check checked={checked} hover={hover} />}
        </MarkerInner>
      </Marker>
    </Wrapper>
  );
});

export default Checkbox;
