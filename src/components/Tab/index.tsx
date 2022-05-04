import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledTab, SelectedBar } from './Tab.styles';

export interface TabProps extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  text: string;
  value: number | string;
}

const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { text, value, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  return (
    <StyledTab ref={ref} theme={theme} css={customStyle} data-value={value} {...props} role="tab">
      {text}
      <SelectedBar theme={theme} />
    </StyledTab>
  );
});

export default Tab;
