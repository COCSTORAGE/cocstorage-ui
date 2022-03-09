import React, { ElementType, HTMLAttributes, CSSProperties } from 'react';
import { css } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { StyledBox } from './Box.styles';

interface BoxProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  customStyle?: CSSProperties;
}

export function Box({ children, tag, customStyle }: BoxProps) {
  const { theme } = useTheme();

  return (
    <StyledBox
      as={tag}
      css={css({
        ...customStyle
      })}
      theme={theme}
    >
      {children}
    </StyledBox>
  );
}

export default Box;
