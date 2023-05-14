import { HTMLAttributes, MouseEvent, forwardRef, useEffect, useRef, useState } from 'react';

import { GenericComponentProps } from '@types';
import { createPortal } from 'react-dom';

import { Content, StyledBackdrop } from './Backdrop.styles';

export interface BackdropProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  transitionDuration?: number;
  centered?: boolean;
  onClose: () => void;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(
  { children, open, transitionDuration = 225, centered, onClose, customStyle, ...props },
  ref
) {
  const [isMounted, setIsMounted] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);

  const backdropPortalRef = useRef<HTMLElement | null>(null);
  const backdropOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const backdropCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';

      let backdrop = document.getElementById('backdrop-root');

      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'backdrop-root';
        backdrop.style.position = 'fixed';
        backdrop.style.top = '0';
        backdrop.style.left = '0';
        backdrop.style.width = '100%';
        backdrop.style.height = '100%';
        backdrop.style.zIndex = '1000';
        backdrop.setAttribute('role', 'presentation');

        document.body.appendChild(backdrop);
      }

      backdropPortalRef.current = backdrop;

      setIsMounted(true);

      if (backdropCloseTimerRef.current) {
        clearTimeout(backdropCloseTimerRef.current);
      }

      backdropOpenTimerRef.current = setTimeout(() => setBackdropOpen(true), 100);
    }
  }, [open]);

  useEffect(() => {
    if (!open && backdropOpen && backdropPortalRef.current) {
      if (backdropOpenTimerRef.current) {
        clearTimeout(backdropOpenTimerRef.current);
      }

      backdropCloseTimerRef.current = setTimeout(() => {
        if (backdropPortalRef.current) {
          backdropPortalRef.current.remove();
          backdropPortalRef.current = null;
        }

        setIsMounted(false);
        setBackdropOpen(false);

        document.body.removeAttribute('style');
      }, transitionDuration + 100);
    }
  }, [open, backdropOpen, transitionDuration]);

  useEffect(() => {
    return () => {
      if (backdropOpenTimerRef.current) {
        clearTimeout(backdropOpenTimerRef.current);
      }
      if (backdropCloseTimerRef.current) {
        clearTimeout(backdropCloseTimerRef.current);
      }

      if (backdropPortalRef.current) {
        backdropPortalRef.current.remove();
        backdropPortalRef.current = null;

        setIsMounted(false);
        setBackdropOpen(false);

        document.body.removeAttribute('style');
      }
    };
  }, []);

  if (isMounted && backdropPortalRef.current) {
    return createPortal(
      <StyledBackdrop
        ref={ref}
        open={backdropOpen}
        close={!open}
        transitionDuration={transitionDuration}
        {...props}
        onClick={onClose}
        css={customStyle}
      >
        <Content centered={centered} onClick={handleClick}>
          {children}
        </Content>
      </StyledBackdrop>,
      backdropPortalRef.current
    );
  }

  return null;
});

export default Backdrop;
