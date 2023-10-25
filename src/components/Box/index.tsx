import { ElementType, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import { GenericComponentProps } from '@typings';

import { StyledBox } from './Box.styles';

export interface BoxProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  component?: ElementType;
}

const Box = forwardRef<HTMLDivElement, PropsWithChildren<BoxProps>>(function Box(
  { children, component = 'div', customStyle, ...props },
  ref
) {
  return (
    <StyledBox as={component} ref={ref} css={customStyle} {...props}>
      {children}
    </StyledBox>
  );
});

export default Box;
