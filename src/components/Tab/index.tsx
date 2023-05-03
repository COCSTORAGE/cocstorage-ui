import { ButtonHTMLAttributes, forwardRef } from 'react';

import { SelectedBar, StyledTab } from './Tab.styles';
import { GenericComponentProps } from '../../types';

export interface TabProps extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  text: string;
  value: number | string;
}

const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { text, value, customStyle, ...props },
  ref
) {
  return (
    <StyledTab ref={ref} data-value={value} {...props} css={customStyle} role="tab">
      {text}
      <SelectedBar />
    </StyledTab>
  );
});

export default Tab;
