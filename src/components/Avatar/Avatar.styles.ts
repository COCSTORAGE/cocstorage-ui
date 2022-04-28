import styled, { CSSObject } from '@emotion/styled';

import { AvatarProps } from '.';

export const StyledAvatar = styled.img<Pick<AvatarProps, 'round'>>`
  background-color: ${({ theme: { palette } }) => palette.background.fg2};

  max-width: 100%;
  border-radius: 50%;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: 6
        }
      : {}};
`;
