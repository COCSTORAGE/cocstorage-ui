import React, { memo, HTMLAttributes, RefObject } from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { Wrapper, StyledRadio, Marker, MarkerInner, Circle } from './Radio.styles';

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement>;
  checked: boolean;
  disabled?: boolean;
  customStyle?: SerializedStyles;
}

function Radio({ ref, checked, disabled, customStyle, ...props }: RadioProps) {
  const { theme } = useTheme();

  return (
    <Wrapper
      ref={ref}
      theme={theme}
      css={customStyle}
      disabled={disabled}
      role="radio"
      tabIndex={0}
    >
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

export default memo(Radio);
