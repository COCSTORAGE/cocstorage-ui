import { ElementType, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import { StyledFlexbox } from './Flexbox.styles';
import { GenericComponentProps } from '../../types';

export interface FlexboxProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  component?: ElementType;
  direction?: 'horizontal' | 'vertical';
  alignment?: 'flex-start' | 'flex-end' | 'center';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  gap?: number;
}

const Flexbox = forwardRef<HTMLDivElement, PropsWithChildren<FlexboxProps>>(function Flexbox(
  {
    children,
    component = 'div',
    direction = 'horizontal',
    alignment,
    justifyContent,
    gap,
    customStyle,
    ...props
  },
  ref
) {
  return (
    <StyledFlexbox
      as={component}
      ref={ref}
      layoutDirection={direction}
      alignment={alignment}
      justifyContent={justifyContent}
      gap={gap}
      {...props}
      css={customStyle}
    >
      {children}
    </StyledFlexbox>
  );
});

export default Flexbox;
