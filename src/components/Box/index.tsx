import React, { ElementType, HTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { StyledBox } from './Box.styles';

interface BoxProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  customStyle?: SerializedStyles;
}

export function Box({ children, tag, customStyle }: BoxProps) {
  const { theme } = useTheme();

  return (
    <StyledBox as={tag} css={customStyle} theme={theme}>
      {children}
    </StyledBox>
  );
}

export default Box;
