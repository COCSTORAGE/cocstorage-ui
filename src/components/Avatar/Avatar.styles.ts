import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

import { AvatarProps } from '.';

export const StyledAvatar = styled.img<
  Pick<AvatarProps, 'round'> & {
    avatarWidth?: string;
    avatarHeight?: string;
  }
>`
  background-color: ${({ theme: { palette } }) => palette.background.fg2};

  ${({ avatarWidth }): CSSObject =>
    avatarWidth
      ? {
          width: avatarWidth
        }
      : {}};

  ${({ avatarHeight }): CSSObject =>
    avatarHeight
      ? {
          height: avatarHeight
        }
      : {}};

  max-width: 100%;
  border-radius: 50%;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: 6
        }
      : {}};
`;
