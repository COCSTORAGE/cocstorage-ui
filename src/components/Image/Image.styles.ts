import styled, { CSSObject } from '@emotion/styled';

import { convertNumberToCSSValue } from '@utils';

import { CSSValue } from '../../types';

import { ImageProps } from '.';

export const RatioImageBox = styled.div<
  Pick<ImageProps, 'round'> & {
    dataWidth: CSSValue;
    dataHeight: CSSValue;
  }
>`
  position: relative;
  width: ${({ dataWidth }) => (dataWidth ? convertNumberToCSSValue(dataWidth) : 'auto')};
  height: ${({ dataHeight }) => (dataHeight ? convertNumberToCSSValue(dataHeight) : 'auto')};
  overflow: hidden;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const RatioImageWrapper = styled.div<Pick<ImageProps, 'width' | 'height' | 'ratio'>>`
  position: relative;
  width: ${({ width }) => (width ? convertNumberToCSSValue(width) : 'auto')};
  height: ${({ height }) => (height ? convertNumberToCSSValue(height) : 'auto')};
  overflow: hidden;

  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.fg1};

  ${({ ratio }): CSSObject => {
    switch (ratio) {
      case '4:3':
        return {
          paddingTop: '75%'
        };
      case '16:9':
        return {
          paddingTop: '56.25%'
        };
      default:
        return {
          paddingTop: '100%'
        };
    }
  }};
`;

export const RatioImageInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);
`;

export const ImageWrapper = styled.div<
  Pick<ImageProps, 'round'> & {
    dataWidth: CSSValue;
    dataHeight: CSSValue;
  }
>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: ${({ dataWidth }) => convertNumberToCSSValue(dataWidth)};
  height: ${({ dataHeight }) => convertNumberToCSSValue(dataHeight)};

  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.fg1};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const Img = styled.img<{
  loaded: boolean;
  loadFailed: boolean;
}>`
  visibility: ${({ loaded, loadFailed }) => (loaded && !loadFailed ? 'visible' : 'hidden')};
`;

export const RatioImg = styled.div<Pick<ImageProps, 'src'>>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: translate(-50%, -50%);
`;

export const FallbackWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
`;

export const SkeletonWrapper = styled.div<{
  isAspectRatio?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ isAspectRatio }): CSSObject =>
    isAspectRatio
      ? {
          transform: 'translate(-50%, -50%)'
        }
      : {}};
`;
