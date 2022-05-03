import React, { memo, HTMLAttributes, ElementType, PropsWithChildren } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledBox } from './Box.styles';

export interface BoxProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  component?: ElementType;
}

function Box({
  children,
  componentRef,
  component = 'div',
  customStyle,
  ...props
}: PropsWithChildren<BoxProps>) {
  return (
    <StyledBox as={component} ref={componentRef} css={customStyle} {...props}>
      {children}
    </StyledBox>
  );
}

export default memo(Box);
