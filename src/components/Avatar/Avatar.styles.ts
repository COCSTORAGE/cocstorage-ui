import styled, { CSSObject } from '@emotion/styled';

import { convertNumberToCSSValue } from '@utils';

import { CSSValue } from '../../types';

import { AvatarProps } from '.';

export const AvatarWrapper = styled.div<
  Pick<AvatarProps, 'round'> & {
    dataWidth: CSSValue;
    dataHeight: CSSValue;
  }
>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: ${({ dataWidth }) => (dataWidth ? convertNumberToCSSValue(dataWidth) : 'auto')};
  height: ${({ dataHeight }) => (dataHeight ? convertNumberToCSSValue(dataHeight) : 'auto')};

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

export const StyledAvatar = styled.img<{
  loaded: boolean;
  loadFailed: boolean;
}>`
  visibility: ${({ loaded, loadFailed }) => (loaded && !loadFailed ? 'visible' : 'hidden')};
`;

export const SkeletonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
