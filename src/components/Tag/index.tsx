import React, { memo, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, ComponentColor } from '../../types';
import { StyledTag } from './Tag.styles';

export interface TagProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: ComponentColor;
  text: string;
  startIcon?: ReactElement;
  iconOnly?: boolean;
}

function Tag({
  componentRef,
  color = 'text',
  text,
  startIcon,
  iconOnly,
  customStyle,
  ...props
}: TagProps) {
  const { theme } = useTheme();

  return (
    <StyledTag ref={componentRef} theme={theme} tagColor={color} css={customStyle} {...props}>
      {startIcon && startIcon}
      {!iconOnly && text}
    </StyledTag>
  );
}

export default memo(Tag);
