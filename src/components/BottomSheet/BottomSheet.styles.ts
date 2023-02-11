import styled, { CSSObject } from '@emotion/styled';

import { BottomSheetProps } from '.';

export const Wrapper = styled.div<
  Pick<BottomSheetProps, 'transitionDuration'> & { sheetOpen: boolean; sheetClose: boolean }
>`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 1001;

  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms;

  ${({ sheetOpen }): CSSObject =>
    sheetOpen
      ? {
          opacity: 1,
          visibility: 'visible'
        }
      : {}};

  ${({ sheetClose }): CSSObject =>
    sheetClose
      ? {
          opacity: 0
        }
      : {}};
`;

export const StyledBottomSheet = styled.div<
  Pick<BottomSheetProps, 'transitionDuration'> & { sheetOpen: boolean; sheetClose: boolean }
>`
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
  transition: transform ${({ transitionDuration }) => transitionDuration}ms;
  transform: translateY(100%);
  z-index: 1002;

  ${({ sheetOpen }) =>
    sheetOpen
      ? `
          transform: translateY(0);
        `
      : ''};

  ${({ sheetClose }) =>
    sheetClose
      ? `
          transform: translateY(100%);
        `
      : ''};
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
