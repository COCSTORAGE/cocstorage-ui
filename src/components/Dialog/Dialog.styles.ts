import styled, { CSSObject } from '@emotion/styled';

import { DialogProps } from '.';

export const Wrapper = styled.div<
  Pick<DialogProps, 'fullWidth' | 'fullScreen' | 'transitionDuration'> & {
    dialogOpen: boolean;
    dialogClose: boolean;
  }
>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${({ fullScreen }): CSSObject =>
    !fullScreen
      ? {
          padding: 20
        }
      : {}};

  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: ${({ theme: { zIndex } }) => zIndex.dialog};

  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms ease;

  ${({ dialogOpen }): CSSObject =>
    dialogOpen
      ? {
          opacity: 1,
          visibility: 'visible'
        }
      : {}};

  ${({ dialogClose }): CSSObject =>
    dialogClose
      ? {
          opacity: 0
        }
      : {}};
`;

export const StyledDialog = styled.div<
  Pick<DialogProps, 'fullWidth' | 'fullScreen' | 'transitionDuration'> & {
    dialogOpen: boolean;
    dialogClose: boolean;
  }
>`
  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}}

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

  opacity: 0;
  transform: scale(0.5, 0.5);
  visibility: hidden;
  transition:
    opacity ${({ transitionDuration }) => transitionDuration}ms ease,
    transform ${({ transitionDuration }) => transitionDuration}ms ease;
  overflow-y: auto;
  z-index: ${({ theme: { zIndex } }) => zIndex.dialog + 1};

  ${({ dialogOpen }): CSSObject =>
    dialogOpen
      ? {
          opacity: 1,
          transform: 'scale(1, 1)',
          visibility: 'visible'
        }
      : {}};

  ${({ dialogClose }): CSSObject =>
    dialogClose
      ? {
          opacity: 0,
          transform: 'scale(0.5, 0.5)'
        }
      : {}};
`;
