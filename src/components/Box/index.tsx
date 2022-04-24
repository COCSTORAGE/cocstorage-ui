import React, { memo, HTMLAttributes, ElementType, PropsWithChildren } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledBox } from './Box.styles';

export interface BoxProps extends GenericComponentProps<HTMLAttributes<HTMLElement>> {
  component?: ElementType;
}

function Box({ children, component = 'div', customStyle, ...props }: PropsWithChildren<BoxProps>) {
  return (
    <StyledBox as={component} css={customStyle} {...props}>
      {children}
    </StyledBox>
  );
}

export default memo(Box);
