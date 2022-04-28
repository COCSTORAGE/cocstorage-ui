import React, { memo, HTMLAttributes, RefObject } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, CSSValue } from '../../types';
import { StyledAvatar } from './Avatar.styles';

export interface AvatarProps extends GenericComponentProps<HTMLAttributes<HTMLImageElement>> {
  ref?: RefObject<HTMLImageElement>;
  src: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  round?: boolean;
}

function Avatar({ ref, src, alt, width, height, round, customStyle, ...props }: AvatarProps) {
  const { theme } = useTheme();

  return (
    <StyledAvatar
      ref={ref}
      theme={theme}
      src={src}
      alt={alt}
      width={width}
      height={height}
      round={round}
      css={customStyle}
      {...props}
    />
  );
}

export default memo(Avatar);
