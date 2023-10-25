import styled, { CSSObject } from '@emotion/styled';

import { AvatarProps } from '.';

export const AvatarWrapper = styled.div<Pick<AvatarProps, 'round'>>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

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

export const SkeletonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
