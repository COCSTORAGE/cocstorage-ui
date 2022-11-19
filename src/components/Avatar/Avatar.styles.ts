import styled, { CSSObject } from '@emotion/styled';

import { AvatarProps } from '.';

export const StyledAvatar = styled.img<Pick<AvatarProps, 'round'>>`
  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.fg1};

  max-width: 100%;
  border-radius: 50%;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;
