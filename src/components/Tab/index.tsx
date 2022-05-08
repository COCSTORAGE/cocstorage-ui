import React, { forwardRef, ButtonHTMLAttributes } from 'react';

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
  return (
    <StyledTab ref={ref} css={customStyle} data-value={value} {...props} role="tab">
      {text}
      <SelectedBar />
    </StyledTab>
  );
});

export default Tab;
