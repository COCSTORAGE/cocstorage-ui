import React, { memo, InputHTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledRadio, Marker, MarkerInner, Circle } from './Radio.styles';

export interface RadioProps
  extends GenericComponentProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

function Radio({ componentRef, checked, disabled, customStyle, ...props }: RadioProps) {
  const { theme } = useTheme();

  return (
    <Wrapper ref={componentRef} theme={theme} css={customStyle} disabled={disabled} role="radio">
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
