import { HTMLAttributes, forwardRef, useState } from 'react';

import Icon from '@components/Icon';
import Skeleton from '@components/Skeleton';

import { CSSValue, GenericComponentProps, IconName } from '../../types';
import { AvatarWrapper, SkeletonWrapper, StyledAvatar } from './Avatar.styles';

export interface AvatarProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
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

  const handleLoad = () => setLoaded(true);
  const handeError = () => setLoadFailed(true);

  return (
    <AvatarWrapper
      ref={ref}
      dataWidth={width}
      dataHeight={height}
      round={round}
      {...props}
      css={customStyle}
    >
      {src && !loadFailed && (
        <StyledAvatar
          width={width}
          height={height}
          src={src}
          alt={alt}
          loaded={loaded}
          loadFailed={loadFailed}
          onLoad={handleLoad}
          onError={handeError}
        />
      )}
      {src && !loaded && !loadFailed && (
        <SkeletonWrapper>
          <Skeleton width="100%" height="100%" disableAspectRatio />
        </SkeletonWrapper>
      )}
      {(!src || loadFailed) && fallback && (
        <Icon name={fallback.iconName} width={fallback.width} height={fallback.height} />
      )}
    </AvatarWrapper>
  );
});

export default Avatar;
