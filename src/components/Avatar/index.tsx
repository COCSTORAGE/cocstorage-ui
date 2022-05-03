import React, { memo, HTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, CSSValue } from '../../types';
import { StyledAvatar } from './Avatar.styles';

export interface AvatarProps
  extends GenericComponentProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  round?: boolean;
}

function Avatar({
  componentRef,
  src,
  alt,
  width,
  height,
  round,
  customStyle,
  ...props
}: AvatarProps) {
  const { theme } = useTheme();

  return (
    <StyledAvatar
      ref={componentRef}
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
