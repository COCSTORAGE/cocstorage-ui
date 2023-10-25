import styled from '@emotion/styled';

import { BottomSheetProps } from '.';

export const Wrapper = styled.div<Pick<BottomSheetProps, 'transitionDuration'>>`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;

  z-index: ${({ theme: { zIndex } }) => zIndex.bottomSheet};
`;

export const StyledBottomSheet = styled.div<Pick<BottomSheetProps, 'transitionDuration'>>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 90%;
  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.bg};
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  pointer-events: none;
  transform: translateY(100%);

  transition: transform ${({ transitionDuration }) => transitionDuration}ms;
`;

export const SwipeZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  touch-action: none;
`;

export const Content = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Rectangle = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${({
    theme: {
      palette: { box }
    }
  }) => box.filled.normal};
  border-radius: 2px;
`;
