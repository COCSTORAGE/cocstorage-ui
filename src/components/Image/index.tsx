import { HTMLAttributes, useEffect, useState } from 'react';

import Icon from '@components/Icon';
import Skeleton from '@components/Skeleton';

import type * as SvgIcons from '../../assets/icons';
import { CSSValue, GenericComponentProps } from '../../types';
import {
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
  ratio?: '1:1' | '4:3' | '16:9';
  round?: CSSValue;
  disableAspectRatio?: boolean;
  fallback?: {
    iconName: keyof typeof SvgIcons;
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
  disableAspectRatio = false,
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
        {!loadFailed && src && (
          <Img
            width={width}
            height={height}
            src={src}
            alt={alt}
            round={round}
            onError={handleError}
          />
        )}
        {src && !loaded && !loadFailed && (
          <SkeletonWrapper round={round}>
            <Skeleton round={round} />
          </SkeletonWrapper>
        )}
        {(!src || loadFailed) && fallback && (
          <Icon name={fallback.iconName} width={fallback.width} height={fallback.height} />
        )}
      </ImageWrapper>
    );
  }

  return (
    <RatioImageBox dataWidth={width} dataHeight={height} round={round}>
      <RatioImageWrapper ratio={ratio} round={round} {...props} css={customStyle}>
        <RatioImageInner>
          {!loadFailed && src && (
            <RatioImg
              width={width}
              height={height}
              src={src}
              alt={alt}
              round={round}
              onError={handleError}
            />
          )}
          {src && !loaded && !loadFailed && (
            <FallbackWrapper round={round}>
              <RatioImageBox dataWidth={width} dataHeight={height} round={round}>
                <Skeleton round={round} />
              </RatioImageBox>
            </FallbackWrapper>
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
