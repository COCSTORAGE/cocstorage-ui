import { useCallback, useContext } from 'react';

import OverlayContext from '@theme/context/OverlayContext';
import { OverlayFrom, OverlayState, OverlayStatus } from '@typings/component';

export default function useOverlay() {
  const [overlay, setOverlay] = useContext(OverlayContext);

  const push = useCallback(
    (newOverlayState: OverlayState) =>
      setOverlay((prevState) => ({
        ...prevState,
        states: prevState.states.concat(newOverlayState)
      })),
    [setOverlay]
  );

  const update = useCallback(
    (id: string, status: OverlayStatus) =>
      setOverlay((prevState) => ({
        ...prevState,
        states: prevState.states.map((overlayState) => ({
          ...overlayState,
          status: overlayState.id === id ? status : overlayState.status
        }))
      })),
    [setOverlay]
  );

  const reset = useCallback(() => {
    overlay.root?.remove();
    setOverlay({
      root: null,
      states: []
    });
    document.body.removeAttribute('style');
  }, [setOverlay, overlay.root]);

  const setRoot = useCallback(
    (newRoot: HTMLDivElement) =>
      setOverlay((prevState) => ({
        ...prevState,
        root: newRoot
      })),
    [setOverlay]
  );

  const getOverlayState = (id: string, from: OverlayFrom) =>
    overlay.states.find((overlayState) => overlayState.id === id && overlayState.from === from);

  const getCurrentOverlayState = (id: string, from: OverlayFrom) => {
    const [firstInOverlayState] = overlay.states.filter(
      (overlayState) => overlayState.status !== 'fulfilled' && overlayState.from === from
    );

    if (!firstInOverlayState || firstInOverlayState.id !== id) {
      return null;
    }

    return firstInOverlayState;
  };

  return {
    overlay,
    push,
    update,
    reset,
    setRoot,
    getCurrentOverlayState,
    getOverlayState
  };
}
