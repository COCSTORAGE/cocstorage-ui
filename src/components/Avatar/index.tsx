import React, { memo, HTMLAttributes, RefObject } from 'react';
import useTheme from '@theme/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledAvatar } from './Avatar.styles';

export interface AvatarProps extends GenericComponentProps<HTMLAttributes<HTMLImageElement>> {
  ref?: RefObject<HTMLImageElement>;
  src: string;
  alt: string;
  width?: string;
  height?: string;
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
      avatarWidth={width}
      avatarHeight={height}
      round={round}
      css={customStyle}
      {...props}
    />
  );
}

export default memo(Avatar);
