import { HTMLAttributes, useEffect, useState } from 'react';

import Icon from '@components/Icon';
import Skeleton from '@components/Skeleton';

import { CSSValue, GenericComponentProps, IconName } from '../../types';
import {
  FallbackBox,
  FallbackWrapper,
  ImageWrapper,
  Img,
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
  ratio?: `${number}:${number}`;
  round?: CSSValue;
  disableResponsive?: boolean;
  disableBackgroundColor?: boolean;
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
  disableResponsive,
  disableBackgroundColor,
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

  const handleLoad = () => setLoaded(true);
  const handleError = () => setLoadFailed(true);

  useEffect(() => {
    setLoaded(false);
    setLoadFailed(false);
  }, [src]);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onerror = () => setLoadFailed(true);
    img.onload = () => setLoaded(true);
  }, [src]);

  if (disableAspectRatio) {
    if ((!src || loadFailed) && fallback) {
      return (
        <FallbackBox
          dataWidth={width}
          dataHeight={height}
          round={round}
          disableResponsive={disableResponsive}
          disableBackgroundColor={disableBackgroundColor}
        >
          <Icon name={fallback.iconName} width={fallback.width} height={fallback.height} />
        </FallbackBox>
      );
    }

    return (
      <ImageWrapper
        dataWidth={width}
        dataHeight={height}
        round={round}
        disableResponsive={disableResponsive}
        disableBackgroundColor={disableBackgroundColor}
        {...props}
        css={customStyle}
      >
        {src && !loadFailed && (
          <Img
            width={width}
            height={height}
            src={src}
            alt={alt}
            loaded={loaded}
            loadFailed={loadFailed}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
        {src && !loaded && !loadFailed && (
          <SkeletonWrapper dataWidth={width} dataHeight={height}>
            <Skeleton width={width} height={height} disableAspectRatio />
          </SkeletonWrapper>
        )}
      </ImageWrapper>
    );
  }

  return (
    <RatioImageBox dataWidth={width} dataHeight={height} round={round} {...props} css={customStyle}>
      <RatioImageWrapper ratio={ratio} disableBackgroundColor={disableBackgroundColor}>
        <RatioImageInner>
          {src && loaded && !loadFailed && <RatioImg src={src} alt={alt} />}
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
