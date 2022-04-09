import React, { ReactElement, HTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { StyledTag } from './Tag.styles';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'semiAccent' | 'text' | 'transparent';
  text: string;
  startIcon?: ReactElement;
  iconOnly?: boolean;
  customStyle?: SerializedStyles;
}

function Tag({ variant, text, startIcon, iconOnly, customStyle, ...props }: TagProps) {
  const { theme } = useTheme();

  return (
    <StyledTag theme={theme} variant={variant} css={customStyle} {...props}>
      {startIcon && startIcon}
      {!iconOnly && text}
    </StyledTag>
  );
}

export default Tag;
