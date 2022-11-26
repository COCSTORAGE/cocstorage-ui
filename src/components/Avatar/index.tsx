import { HTMLAttributes, forwardRef, useEffect, useState } from 'react';

import Icon from '@components/Icon';
import Skeleton from '@components/Skeleton';

import { CSSValue, GenericComponentProps, IconName } from '../../types';
import { AvatarWrapper, SkeletonWrapper, StyledAvatar } from './Avatar.styles';

export interface AvatarProps extends GenericComponentProps<HTMLAttributes<HTMLImageElement>> {
  src: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  round?: CSSValue;
  fallback?: {
    iconName: IconName;
    width?: CSSValue;
    height?: CSSValue;
  };
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(function Avatar(
  {
    src,
    alt,
    width = 'auto',
    height = 'auto',
    round = '50%',
    fallback = {
      iconName: 'ImageOutlined',
      width: 24,
      height: 24
    },
    customStyle,
    ...props
  },
  ref
) {
  const [loaded, setLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onerror = () => setLoadFailed(true);
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <AvatarWrapper dataWidth={width} dataHeight={height} round={round} css={customStyle} {...props}>
      {src && !loadFailed && (
        <StyledAvatar ref={ref} src={src} alt={alt} width={width} height={height} />
      )}
      {src && !loaded && !loadFailed && (
        <SkeletonWrapper>
          <Skeleton width={width} height={height} disableAspectRatio />
        </SkeletonWrapper>
      )}
      {(!src || loadFailed) && fallback && (
        <Icon name={fallback.iconName} width={fallback.width} height={fallback.height} />
      )}
    </AvatarWrapper>
  );
});

export default Avatar;
