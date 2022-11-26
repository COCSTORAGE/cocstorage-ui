import { HTMLAttributes, useEffect, useState } from 'react';

import Icon from '@components/Icon';
import Skeleton from '@components/Skeleton';

import { CSSValue, GenericComponentProps, IconName } from '../../types';
import {
  FallbackWrapper,
  ImageWrapper,
  RatioImageBox,
  RatioImageInner,
  RatioImageWrapper,
  RatioImg,
  SkeletonWrapper
} from './Image.styles';

export interface ImageProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  src: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  ratio?: '1:1' | '4:3' | '16:9';
  round?: CSSValue;
  disableAspectRatio?: boolean;
  fallback?: {
    iconName: IconName;
    width?: CSSValue;
    height?: CSSValue;
  };
}

function Image({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  ratio = '1:1',
  round = 6,
  disableAspectRatio,
  fallback = {
    iconName: 'ImageOutlined',
    width: 24,
    height: 24
  },
  customStyle,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  const handleError = () => setLoadFailed(true);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onerror = () => setLoadFailed(true);
    img.onload = () => setLoaded(true);
  }, [src]);

  if (disableAspectRatio) {
    return (
      <ImageWrapper
        dataWidth={width}
        dataHeight={height}
        round={round}
        {...props}
        css={customStyle}
      >
        {src && !loadFailed && (
          <img width={width} height={height} src={src} alt={alt} onError={handleError} />
        )}
        {src && !loaded && !loadFailed && (
          <SkeletonWrapper round={round}>
            <Skeleton width="100%" height="100%" disableAspectRatio />
          </SkeletonWrapper>
        )}
        {(!src || loadFailed) && fallback && (
          <Icon name={fallback.iconName} width={fallback.width} height={fallback.height} />
        )}
      </ImageWrapper>
    );
  }

  return (
    <RatioImageBox dataWidth={width} dataHeight={height} round={round} {...props} css={customStyle}>
      <RatioImageWrapper ratio={ratio}>
        <RatioImageInner>
          {src && loaded && !loadFailed && <RatioImg src={src} />}
          {src && !loaded && !loadFailed && (
            <SkeletonWrapper isAspectRatio>
              <Skeleton width="100%" height="100%" disableAspectRatio />
            </SkeletonWrapper>
          )}
          {(!src || loadFailed) && fallback && (
            <FallbackWrapper>
              <Icon name={fallback.iconName} width={fallback.width} height={fallback.height} />
            </FallbackWrapper>
          )}
        </RatioImageInner>
      </RatioImageWrapper>
    </RatioImageBox>
  );
}

export default Image;
