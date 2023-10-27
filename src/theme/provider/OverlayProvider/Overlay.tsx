import { useEffect, useRef, useState } from 'react';

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

  const currentOverlayState =
    states.filter(({ status }) => ['pending', 'active'].includes(status))[0] || states[0];

  const [open, setOpen] = useState(true);

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
      rootElement.style.display = 'flex';
      rootElement.style.alignItems = 'center';
      rootElement.style.justifyContent = 'center';
      rootElement.style.zIndex = '1000';
      rootElement.role = 'presentation';

      document.body.appendChild(rootElement);

      setRoot(rootElement);
    }
  }, [setRoot, states]);

  useEffect(() => {
    if (!ref.current || !root || !open) return;

    const isFulfilledAll =
      states.length === states.filter(({ status }) => status === 'fulfilled').length;

    if (isFulfilledAll) {
      setOpen(false);

      closeTimerRef.current = setTimeout(reset, currentOverlayState?.props?.transitionDuration);
    }
  }, [open, currentOverlayState?.props?.transitionDuration, reset, root, states]);

  useEffect(() => {
    const hasOpenStatus =
      states.filter(({ status }) => ['pending', 'active'].includes(status)).length > 0;

    if (hasOpenStatus) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }

      setOpen(true);
    }
  }, [states]);

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
      open={open}
      onClick={currentOverlayState?.props?.onClose}
      transitionDuration={currentOverlayState?.props?.transitionDuration}
      css={currentOverlayState?.props?.overlayCustomStyle}
    />,
    root
  );
}

export default Overlay;

const StyledOverlay = styled.div<{
  open: boolean;
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
  animation: ${({ open }) => (!open ? fadeOut : fadeIn)}
    ${({ transitionDuration }) => transitionDuration}ms forwards;
`;
