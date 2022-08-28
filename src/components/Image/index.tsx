import { HTMLAttributes, useState } from 'react';

import Icon from '@components/Icon';
import Skeleton from '@components/Skeleton';

import type * as SvgIcons from '../../assets/icons';
import { CSSValue, GenericComponentProps } from '../../types';
import {
  FallbackWrapper,
  ImageWrapper,
  RatioImageBox,
  RatioImageInner,
  RatioImageWrapper,
  RatioImg
} from './Image.styles';

export interface ImageProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  src: string;
  alt: string;
  width: CSSValue;
  height: CSSValue;
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
  width = '100%',
  height,
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

  const handleLoad = () => setLoaded(true);
  const handleError = () => setLoadFailed(true);

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
          <img
            width={width}
            height={height}
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
        {src && !loaded && !loadFailed && <Skeleton />}
        {(!src || loadFailed) && fallback && (
          <Icon name={fallback.iconName} width={fallback.width} height={fallback.height} />
        )}
      </ImageWrapper>
    );
  }

  return (
    <RatioImageBox dataWidth={width} dataHeight={height}>
      <RatioImageWrapper ratio={ratio} round={round} {...props} css={customStyle}>
        <RatioImageInner>
          {!loadFailed && src && (
            <RatioImg
              width={width}
              height={height}
              src={src}
              alt={alt}
              onLoad={handleLoad}
              onError={handleError}
            />
          )}
          {src && !loaded && !loadFailed && (
            <FallbackWrapper>
              <RatioImageBox dataWidth={width} dataHeight={height}>
                <Skeleton />
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
