import styled, { CSSObject } from '@emotion/styled';

import { CSSValue } from '@types';
import { convertNumberToCSSValue } from '@utils';

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

export const RatioImageWrapper = styled.div<Pick<ImageProps, 'ratio' | 'disableBackgroundColor'>>`
  position: relative;
  overflow: hidden;

  ${({
    theme: {
      palette: { background }
    },
    disableBackgroundColor
  }): CSSObject =>
    !disableBackgroundColor
      ? {
          backgroundColor: background.fg1
        }
      : {}};

  ${({ ratio = '1:1' }): CSSObject => {
    const splitRatio = String(ratio).split(':');
    return {
      paddingTop: `calc(100% / ${splitRatio[0]} * ${splitRatio[1]})`
    };
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
  Pick<ImageProps, 'round' | 'disableResponsive' | 'disableBackgroundColor'> & {
    dataWidth: CSSValue;
    dataHeight: CSSValue;
  }
>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${({ disableResponsive, dataWidth, dataHeight }): CSSObject =>
    disableResponsive
      ? {
          width: convertNumberToCSSValue(dataWidth),
          height: convertNumberToCSSValue(dataHeight)
        }
      : {
          width: '100%',
          height: '100%',
          maxWidth: convertNumberToCSSValue(dataWidth),
          maxHeight: convertNumberToCSSValue(dataHeight)
        }};

  ${({
    theme: {
      palette: { background }
    },
    disableBackgroundColor
  }): CSSObject =>
    !disableBackgroundColor
      ? {
          backgroundColor: background.fg1
        }
      : {}};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const FallbackBox = styled.div<
  Pick<ImageProps, 'round' | 'disableResponsive' | 'disableBackgroundColor'> & {
    dataWidth: CSSValue;
    dataHeight: CSSValue;
  }
>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ disableResponsive, dataWidth, dataHeight }): CSSObject =>
    disableResponsive
      ? {
          width: convertNumberToCSSValue(dataWidth),
          height: convertNumberToCSSValue(dataHeight)
        }
      : {
          width: '100%',
          height: '100%',
          maxWidth: convertNumberToCSSValue(dataWidth),
          maxHeight: convertNumberToCSSValue(dataHeight),
          minHeight: convertNumberToCSSValue(dataHeight)
        }};

  ${({
    theme: {
      palette: { background }
    },
    disableBackgroundColor
  }): CSSObject =>
    !disableBackgroundColor
      ? {
          backgroundColor: background.fg1
        }
      : {}};

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
  width: 100%;
  height: 100%;
  visibility: ${({ loaded, loadFailed }) => (loaded && !loadFailed ? 'visible' : 'hidden')};
`;

export const RatioImg = styled.img<Pick<ImageProps, 'src'>>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  dataWidth?: CSSValue;
  dataHeight?: CSSValue;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ dataWidth }) => (dataWidth ? convertNumberToCSSValue(dataWidth) : '100%')};
  height: ${({ dataHeight }) => (dataHeight ? convertNumberToCSSValue(dataHeight) : '100%')};

  ${({ isAspectRatio }): CSSObject =>
    isAspectRatio
      ? {
          transform: 'translate(-50%, -50%)'
        }
      : {}};
`;
