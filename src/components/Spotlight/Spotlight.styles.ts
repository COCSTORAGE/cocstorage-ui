import styled, { CSSObject } from '@emotion/styled';

import { SpotlightProps } from '.';

export const StyledSpotlight = styled.div<Pick<SpotlightProps, 'round' | 'transitionDuration'>>`
  position: fixed;
  width: fit-content;
  height: fit-content;
  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.bg};

  opacity: 0;
  pointer-events: none;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms ease;

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;
