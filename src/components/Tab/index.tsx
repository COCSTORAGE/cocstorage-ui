import React, { memo, HTMLAttributes, RefObject } from 'react';
import useTheme from '@theme/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledTab, SelectedBar } from './Tab.styles';

export interface TabProps extends GenericComponentProps<HTMLAttributes<HTMLButtonElement>> {
  ref?: RefObject<HTMLButtonElement>;
  text: string;
  value: number | string;
}

function Tab({ ref, text, value, customStyle, ...props }: TabProps) {
  const { theme } = useTheme();

  return (
    <StyledTab ref={ref} theme={theme} css={customStyle} data-value={value} role="tab" {...props}>
      {text}
      <SelectedBar theme={theme} />
    </StyledTab>
  );
}

export default memo(Tab);
