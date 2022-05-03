import React, { memo, ButtonHTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledTab, SelectedBar } from './Tab.styles';

export interface TabProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
  value: number | string;
}

function Tab({ componentRef, text, value, customStyle, ...props }: TabProps) {
  const { theme } = useTheme();

  return (
    <StyledTab
      ref={componentRef}
      theme={theme}
      css={customStyle}
      data-value={value}
      {...props}
      role="tab"
    >
      {text}
      <SelectedBar theme={theme} />
    </StyledTab>
  );
}

export default memo(Tab);
