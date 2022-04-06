import React, { HTMLAttributes } from 'react';
import useTheme from '@theme/useTheme';

import { Wrapper, StyledRadio, RadioMarker, RadioMarkerInner, CheckedCircle } from './Radio.styles';

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
}

function Radio({ checked, disabled, ...props }: RadioProps) {
  const { theme } = useTheme();

  return (
    <Wrapper theme={theme} disabled={disabled}>
      <StyledRadio type="radio" checked={checked} disabled={disabled} {...props} />
      <RadioMarker>
        {checked && !disabled && (
          <RadioMarkerInner>
            <CheckedCircle theme={theme} />
          </RadioMarkerInner>
        )}
      </RadioMarker>
    </Wrapper>
  );
}

export default Radio;
