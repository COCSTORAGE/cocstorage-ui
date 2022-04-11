import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { DialogProps } from '.';

export const Wrapper = styled.div<
  Pick<DialogProps, 'fullScreen' | 'transitionDuration'> & {
    dialogOpen: boolean;
    dialogClose: boolean;
  }
>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${({ fullScreen }) =>
    !fullScreen
      ? css`
          padding: 20px;
        `
      : ''};

  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 1001;

  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1)
    0ms;

  ${({ dialogOpen }) =>
    dialogOpen
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : ''};

  ${({ dialogClose }) =>
    dialogClose
      ? css`
          opacity: 0;
        `
      : ''};
`;

export const StyledDialog = styled.div<
  Pick<DialogProps, 'fullScreen' | 'transitionDuration'> & {
    dialogOpen: boolean;
    dialogClose: boolean;
  }
>`
  ${({ fullScreen }) =>
    !fullScreen
      ? css`
          border-radius: 16px;
        `
      : css`
          width: 100%;
          height: 100%;
        `};

  background-color: ${({ theme: { palette } }) => palette.background.bg};

  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1)
    0ms;

  z-index: 1003;

  ${({ dialogOpen }) =>
    dialogOpen
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : ''};

  ${({ dialogClose }) =>
    dialogClose
      ? css`
          opacity: 0;
        `
      : ''};
`;
