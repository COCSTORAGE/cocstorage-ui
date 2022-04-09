import React, { HTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { StyledTab, SelectedBar } from './Tab.styles';

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  value: number | string;
  customStyle?: SerializedStyles;
}

function Tab({ text, value, customStyle, ...props }: TabProps) {
  const { theme } = useTheme();

  return (
    <StyledTab theme={theme} css={customStyle} data-value={value} role="tab" {...props}>
      {text}
      <SelectedBar theme={theme} />
    </StyledTab>
  );
}

export default Tab;
