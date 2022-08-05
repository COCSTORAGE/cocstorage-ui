import { HTMLAttributes, forwardRef } from 'react';

import { CSSValue, GenericComponentProps } from '../../types';
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
      {...props}
      css={customStyle}
    />
  );
});

export default Avatar;
