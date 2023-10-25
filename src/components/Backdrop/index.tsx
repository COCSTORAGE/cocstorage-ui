import { HTMLAttributes, MouseEvent, forwardRef, useEffect, useRef } from 'react';

import { defaultTransitionDuration } from '@constants';
import useOverlay from '@theme/hooks/useOverlay';
import { GenericComponentProps } from '@typings';
import createUniqueKey from '@utils';
import { createPortal } from 'react-dom';

import { StyledBackdrop, Wrapper } from './Backdrop.styles';

export interface BackdropProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  transitionDuration?: number;
  centered?: boolean;
  onClose: () => void;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(
  {
    children,
    open,
    transitionDuration = defaultTransitionDuration,
    centered,
    onClose,
    customStyle,
    ...props
  },
  ref
) {
  const { overlay, push, update, reset, getActiveOverlayState } = useOverlay();

  const idRef = useRef(`backdrop-${createUniqueKey(`${Math.floor(Math.random() * 100000)}`)}`);
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const backdropCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeOverlayState = getActiveOverlayState(idRef.current, 'backdrop');

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    if (open) {
      push({
        id: idRef.current,
        status: 'pending',
        from: 'backdrop',
        props: {
          onClose,
          transitionDuration,
          overlayCustomStyle: customStyle
        }
      });
    }
  }, [open, push, onClose, transitionDuration, customStyle]);

  useEffect(() => {
    if (activeOverlayState?.status === 'pending') {
      backdropOpenTimerRef.current = setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.opacity = '1';
        }
        update(idRef.current, 'active');
      }, transitionDuration);
    }
  }, [activeOverlayState, transitionDuration, update]);

  useEffect(() => {
    if (activeOverlayState?.status === 'active') {
      if (contentRef.current) {
        contentRef.current.style.pointerEvents = 'auto';
      }
    }
  }, [activeOverlayState?.status]);

  useEffect(() => {
    if (open || !contentRef.current) return;
    if (activeOverlayState?.status !== 'active') return;

    contentRef.current.style.opacity = '0';

    backdropCloseTimerRef.current = setTimeout(() => {
      update(idRef.current, 'fulfilled');
    }, transitionDuration);
  }, [open, activeOverlayState, transitionDuration, update]);

  useEffect(() => {
    return () => {
      if (backdropOpenTimerRef.current) {
        clearTimeout(backdropOpenTimerRef.current);
      }
      if (backdropCloseTimerRef.current) {
        clearTimeout(backdropCloseTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (overlay.root) {
        reset();
      }
    };
  }, [overlay.root, reset]);

  if (!overlay.root || !activeOverlayState) return null;

  return createPortal(
    <Wrapper ref={ref}>
      <StyledBackdrop
        ref={contentRef}
        onClick={handleClick}
        transitionDuration={transitionDuration}
        centered={centered}
        {...props}
      >
        {children}
      </StyledBackdrop>
    </Wrapper>,
    overlay.root
  );
});

export default Backdrop;
