import { ElementType, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledFlexbox } from './Flexbox.styles';

export interface FlexboxProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  component?: Extract<ElementType, 'div' | 'section' | 'main' | 'article' | 'aside' | 'button'>;
  direction?: 'horizontal' | 'vertical';
  alignment?: 'flex-start' | 'flex-end' | 'center';
  justifyContent?: 'center' | 'space-between';
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
