import React, { HTMLAttributes } from 'react';
import useTheme from '@theme/useTheme';

import { Wrapper, StyledRadio, Marker, MarkerInner, Circle } from './Radio.styles';

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
}

function Radio({ checked, disabled, ...props }: RadioProps) {
  const { theme } = useTheme();

  return (
    <Wrapper theme={theme} disabled={disabled} role="radio" tabIndex={0}>
      <StyledRadio type="radio" checked={checked} disabled={disabled} {...props} />
      <Marker>
        {checked && !disabled && (
          <MarkerInner>
            <Circle theme={theme} />
          </MarkerInner>
        )}
      </Marker>
    </Wrapper>
  );
}

export default Radio;
