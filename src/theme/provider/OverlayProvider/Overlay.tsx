import { useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import { fadeIn, fadeOut } from '@styles/keyframes';
import useOverlay from '@theme/hooks/useOverlay';
import { createPortal } from 'react-dom';

function Overlay() {
  const {
    overlay: { root, states },
    reset,
    setRoot
  } = useOverlay();

  const currentOverlayState = states[states.length - 1];

  const ref = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    let rootElement = document.getElementById('overlay-root') as HTMLDivElement;

    if (!rootElement && states.length) {
      document.body.style.overflow = 'hidden';

      rootElement = document.createElement('div');
      rootElement.id = 'overlay-root';
      rootElement.style.position = 'fixed';
      rootElement.style.top = '0';
      rootElement.style.left = '0';
      rootElement.style.width = '100%';
      rootElement.style.height = '100%';
      rootElement.style.zIndex = '1000';
      rootElement.role = 'presentation';

      document.body.appendChild(rootElement);

      setRoot(rootElement);
    }
  }, [setRoot, states]);

  useEffect(() => {
    if (!ref.current || !root) return;

    const isFulfilledAll =
      states.length === states.filter(({ status }) => status === 'fulfilled').length;

    if (isFulfilledAll) {
      ref.current.style.animation = `${fadeOut.name} ${currentOverlayState?.props?.transitionDuration}ms forwards`;

      closeTimerRef.current = setTimeout(reset, currentOverlayState?.props?.transitionDuration);
    }
  }, [currentOverlayState?.props?.transitionDuration, reset, root, states]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  if (!root) return null;

  return createPortal(
    <StyledOverlay
      ref={ref}
      onClick={currentOverlayState?.props?.onClose}
      transitionDuration={currentOverlayState?.props?.transitionDuration}
      css={currentOverlayState?.props?.overlayCustomStyle}
    />,
    root
  );
}

export default Overlay;

const StyledOverlay = styled.div<{
  transitionDuration?: number;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms;
  z-index: ${({ theme: { zIndex } }) => zIndex.overlay};
  animation: ${fadeIn} ${({ transitionDuration }) => transitionDuration}ms forwards;

  ${fadeOut}
`;
