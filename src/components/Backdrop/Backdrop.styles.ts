import styled, { CSSObject } from '@emotion/styled';

import { BackdropProps } from '.';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: ${({ theme: { zIndex } }) => zIndex.backdrop};
`;

export const StyledBackdrop = styled.div<Pick<BackdropProps, 'transitionDuration' | 'centered'>>`
  overflow-y: auto;
  pointer-events: none;
  opacity: 0;

  transition: opacity ${({ transitionDuration }) => transitionDuration}ms;

  ${({ centered }): CSSObject =>
    centered
      ? {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'auto',
          height: 'auto'
        }
      : {}};
`;
