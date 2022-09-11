import styled, { CSSObject } from '@emotion/styled';

import { parseNumberToCSSValue } from '@utils';

import { CSSValue } from '../../types';

import { ImageProps } from '.';

export const RatioImageBox = styled.div<
  Pick<ImageProps, 'round'> & {
    dataWidth: CSSValue;
    dataHeight: CSSValue;
  }
>`
  width: ${({ dataWidth }) => parseNumberToCSSValue(dataWidth)};
  height: ${({ dataHeight }) => parseNumberToCSSValue(dataHeight)};

  overflow: hidden;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const RatioImageWrapper = styled.div<Pick<ImageProps, 'ratio' | 'round'>>`
  position: relative;
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

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
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

  width: ${({ dataWidth }) => parseNumberToCSSValue(dataWidth)};
  height: ${({ dataHeight }) => parseNumberToCSSValue(dataHeight)};

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

export const RatioImg = styled.img<Pick<ImageProps, 'round'>>`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
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

export const SkeletonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
