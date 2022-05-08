import React, { forwardRef, HTMLAttributes } from 'react';

import { GenericComponentProps, CSSValue } from '../../types';
import { StyledAvatar } from './Avatar.styles';

export interface AvatarProps extends GenericComponentProps<HTMLAttributes<HTMLImageElement>> {
  src: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  round?: boolean;
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(function Avatar(
  { src, alt, width, height, round, customStyle, ...props },
  ref
) {
  return (
    <StyledAvatar
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      round={round}
      css={customStyle}
      {...props}
    />
  );
});

export default Avatar;
