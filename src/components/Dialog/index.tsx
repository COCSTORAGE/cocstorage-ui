import {
  HTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  TouchEvent,
  forwardRef,
  useEffect,
  useRef,
  useState
} from 'react';

import { createPortal } from 'react-dom';

import { CustomStyle, GenericComponentProps } from '../../types';
import { StyledDialog, Wrapper } from './Dialog.styles';

export interface DialogProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>> {
  open: boolean;
  transitionDuration?: number;
  fullWidth?: boolean;
  fullScreen?: boolean;
  enableSwipeableClose?: boolean;
  onClose: () => void;
  wrapperCustomStyle?: CustomStyle;
}

const Dialog = forwardRef<HTMLDivElement, PropsWithChildren<DialogProps>>(function Dialog(
  {
    children,
    open,
    transitionDuration = 225,
    fullWidth,
    fullScreen,
    enableSwipeableClose = false,
    onClose,
    wrapperCustomStyle,
    customStyle,
    ...props
  },
  ref
) {
  const [isMounted, setIsMounted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [swipeableClose, setSwipeableClose] = useState(false);

  const dialogPortalRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogSwipeCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const measureRef = useRef({
    startClientY: 0,
    lastTranslateY: 0
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (!enableSwipeableClose || !fullScreen || !dialogRef.current) return;

    measureRef.current.startClientY = event.clientY;
    setSwipeableClose(true);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!swipeableClose || !dialogRef.current) return;

    let translateY = event.clientY - measureRef.current.startClientY;

    if (translateY <= 0) {
      translateY = 0;
    }

    dialogRef.current.setAttribute('style', `transform: translateY(${translateY}px)`);
    measureRef.current.lastTranslateY = translateY;
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (!enableSwipeableClose || !fullScreen || !dialogRef.current) return;

    measureRef.current.startClientY = event.touches[0].clientY;
    setSwipeableClose(true);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!swipeableClose || !dialogRef.current) return;

    let translateY = event.touches[0].clientY - measureRef.current.startClientY;

    if (translateY <= 0) {
      translateY = 0;
    }

    dialogRef.current.setAttribute('style', `transform: translateY(${translateY}px)`);
    measureRef.current.lastTranslateY = translateY;
  };

  const handleEndSwipeable = () => {
    if (!swipeableClose || !dialogRef.current) return;

    const swipedPercentage =
      (measureRef.current.lastTranslateY / (dialogRef.current.clientHeight || 0)) * 100;

    if (swipedPercentage >= 10) {
      dialogRef.current.setAttribute('style', 'transform: translateY(100%)');
      dialogSwipeCloseTimerRef.current = setTimeout(() => {
        onClose();
      }, transitionDuration);
    } else {
      dialogRef.current.removeAttribute('style');
    }

    setSwipeableClose(false);
    measureRef.current = {
      startClientY: 0,
      lastTranslateY: 0
    };
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';

      let dialog = document.getElementById('dialog-root');

      if (!dialog) {
        dialog = document.createElement('div');
        dialog.id = 'dialog-root';
        dialog.style.position = 'fixed';
        dialog.style.top = '0';
        dialog.style.left = '0';
        dialog.style.width = '100%';
        dialog.style.height = '100%';
        dialog.style.zIndex = '1000';
        dialog.setAttribute('role', 'presentation');

        document.body.appendChild(dialog);
      }

      dialogPortalRef.current = dialog;

      setIsMounted(true);

      if (dialogCloseTimerRef.current) {
        clearTimeout(dialogCloseTimerRef.current);
      }

      dialogOpenTimerRef.current = setTimeout(() => setDialogOpen(true), 100);
    }
  }, [open]);

  useEffect(() => {
    if (!open && dialogOpen && dialogPortalRef.current) {
      if (dialogOpenTimerRef.current) {
        clearTimeout(dialogOpenTimerRef.current);
      }

      dialogCloseTimerRef.current = setTimeout(() => {
        if (dialogPortalRef.current) {
          dialogPortalRef.current.remove();
          dialogPortalRef.current = null;
        }

        setIsMounted(false);
        setDialogOpen(false);

        document.body.removeAttribute('style');
        measureRef.current = {
          startClientY: 0,
          lastTranslateY: 0
        };
      }, transitionDuration + 100);
    }
  }, [open, dialogOpen, transitionDuration]);

  useEffect(() => {
    return () => {
      if (dialogOpenTimerRef.current) {
        clearTimeout(dialogOpenTimerRef.current);
      }
      if (dialogCloseTimerRef.current) {
        clearTimeout(dialogCloseTimerRef.current);
      }
      if (dialogSwipeCloseTimerRef.current) {
        clearTimeout(dialogSwipeCloseTimerRef.current);
      }
      if (dialogPortalRef.current) {
        dialogPortalRef.current?.remove();
        dialogPortalRef.current = null;

        setIsMounted(false);
        setDialogOpen(false);
        measureRef.current = {
          startClientY: 0,
          lastTranslateY: 0
        };
      }
      document.body.removeAttribute('style');
    };
  }, []);

  if (isMounted && dialogPortalRef.current) {
    return createPortal(
      <Wrapper
        ref={ref}
        dialogOpen={dialogOpen}
        dialogClose={!open}
        transitionDuration={transitionDuration}
        fullScreen={fullScreen}
        onClick={onClose}
        role="dialog"
        css={wrapperCustomStyle}
      >
        <StyledDialog
          ref={dialogRef}
          dialogOpen={dialogOpen}
          dialogClose={!open}
          transitionDuration={transitionDuration}
          fullWidth={fullWidth}
          fullScreen={fullScreen}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleEndSwipeable}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleEndSwipeable}
          {...props}
          css={customStyle}
        >
          {children}
        </StyledDialog>
      </Wrapper>,
      dialogPortalRef.current
    );
  }

  return null;
});

export default Dialog;
