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
  const { overlay, push, update, getCurrentOverlayState, getOverlayState } = useOverlay();

  const idRef = useRef(`backdrop-${createUniqueKey(`${Math.floor(Math.random() * 100000)}`)}`);
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropOpenTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const backdropCloseTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const currentOverlayState = getCurrentOverlayState(idRef.current, 'backdrop');
  const hasOverlayState = !!getOverlayState(idRef.current, 'backdrop');

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    if (open && !hasOverlayState) {
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
  }, [open, push, onClose, transitionDuration, customStyle, hasOverlayState]);

  useEffect(() => {
    if (currentOverlayState?.status === 'pending') {
      backdropOpenTimerRef.current = setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.opacity = '1';
        }
        update(idRef.current, 'active');
      }, transitionDuration);
    }
  }, [currentOverlayState, transitionDuration, update]);

  useEffect(() => {
    if (currentOverlayState?.status === 'active') {
      if (contentRef.current) {
        contentRef.current.style.pointerEvents = 'auto';
      }
    }
  }, [currentOverlayState?.status]);

  useEffect(() => {
    if (open || !contentRef.current) return;
    if (currentOverlayState?.status !== 'active') return;

    contentRef.current.style.opacity = '0';

    backdropCloseTimerRef.current = setTimeout(() => {
      update(idRef.current, 'fulfilled');
    }, transitionDuration);
  }, [open, currentOverlayState, transitionDuration, update]);

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
    const id = idRef.current;
    return () => {
      update(id, 'fulfilled');
    };
  }, [update]);

  if (!overlay.root || !currentOverlayState) return null;

  return createPortal(
    <Wrapper ref={ref} onClick={onClose}>
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
