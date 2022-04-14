import styled from '@emotion/styled';

import { css } from '@emotion/react';
import { AvatarProps } from '.';

export const StyledAvatar = styled.img<
  Pick<AvatarProps, 'round'> & {
    avatarWidth?: string;
    avatarHeight?: string;
  }
>`
  background-color: ${({ theme: { palette } }) => palette.background.fg2};

  ${({ avatarWidth }) =>
    avatarWidth
      ? css`
          width: ${avatarWidth};
        `
      : ''};

  ${({ avatarHeight }) =>
    avatarHeight
      ? css`
          height: ${avatarHeight};
        `
      : ''};

  max-width: 100%;
  border-radius: 50%;

  ${({ round }) =>
    round
      ? css`
          border-radius: 6px;
        `
      : ''};
`;
