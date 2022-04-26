import styled, { CSSObject } from '@emotion/styled';

import { IconButtonProps } from '.';

export const StyledIconButton = styled.button<Pick<IconButtonProps, 'rotation'>>`
  ${({ rotation }): CSSObject =>
    rotation
      ? {
          transform: `rotate(${rotation}deg)`
        }
      : {}};
`;
