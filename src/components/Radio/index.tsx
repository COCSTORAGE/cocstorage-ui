import { InputHTMLAttributes, forwardRef } from 'react';

import { Circle, Marker, MarkerInner, StyledRadio, Wrapper } from './Radio.styles';
import { GenericComponentProps } from '../../types';

export interface RadioProps extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>> {}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { checked, disabled, customStyle, ...props },
  ref
) {
  return (
    <Wrapper ref={ref} css={customStyle} disabled={disabled} role="radio">
      <StyledRadio type="radio" checked={checked} disabled={disabled} {...props} />
      <Marker>
        {checked && !disabled && (
          <MarkerInner>
            <Circle />
          </MarkerInner>
        )}
      </Marker>
    </Wrapper>
  );
});

export default Radio;
