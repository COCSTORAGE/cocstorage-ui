import React, { forwardRef, PropsWithChildren, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, ComponentColor } from '../../types';
import { StyledTag } from './Tag.styles';

export interface TagProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  color?: ComponentColor;
  startIcon?: ReactElement;
  iconOnly?: boolean;
}

const Tag = forwardRef<HTMLDivElement, PropsWithChildren<TagProps>>(function Tag(
  { color = 'text', children, startIcon, iconOnly, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  return (
    <StyledTag ref={ref} theme={theme} tagColor={color} css={customStyle} {...props}>
      {startIcon && startIcon}
      {!iconOnly && children}
    </StyledTag>
  );
});

export default Tag;
