import styled, { CSSObject } from '@emotion/styled';

import { DialogProps } from '.';

export const Wrapper = styled.div<Pick<DialogProps, 'fullWidth' | 'fullScreen'>>`
  max-width: 100%;

  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}}

  ${({ fullScreen }): CSSObject =>
    !fullScreen
      ? {
          padding: 20,
          borderRadius: 16
        }
      : {
          width: '100%',
          height: '100%'
        }};

  z-index: ${({ theme: { zIndex } }) => zIndex.dialog};
`;

export const StyledDialog = styled.div<Pick<DialogProps, 'fullScreen' | 'transitionDuration'>>`
  width: 100%;
  height: 100%;
  margin: auto;

  ${({ fullScreen }): CSSObject =>
    !fullScreen
      ? {
          borderRadius: 16
        }
      : {
          width: '100%',
          height: '100%'
        }};

  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.bg};

  overflow-y: auto;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.7);
  visibility: hidden;

  transition:
    opacity ${({ transitionDuration }) => transitionDuration}ms,
    transform ${({ transitionDuration }) => transitionDuration}ms;
`;
