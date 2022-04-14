import React, { memo, HTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { SerializedStyles } from '@emotion/react';

import { StyledBox } from './Box.styles';

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  component?: ElementType;
  customStyle?: SerializedStyles;
}

function Box({ children, component = 'div', customStyle, ...props }: PropsWithChildren<BoxProps>) {
  return (
    <StyledBox as={component} css={customStyle} {...props}>
      {children}
    </StyledBox>
  );
}

export default memo(Box);
