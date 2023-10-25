import {
  HTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef
} from 'react';

import { defaultTransitionDuration } from '@constants';
import useOverlay from '@theme/hooks/useOverlay';
import createUniqueKey from '@utils';
import { createPortal } from 'react-dom';
import { CustomStyle, GenericComponentProps } from 'src/typings';

import { StyledDialog, Wrapper } from './Dialog.styles';

export interface DialogProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>> {
  open: boolean;
  transitionDuration?: number;
  fullWidth?: boolean;
  fullScreen?: boolean;
  onClose: () => void;
  overlayCustomStyle?: CustomStyle;
}

const Dialog = forwardRef<HTMLDivElement, PropsWithChildren<DialogProps>>(function Dialog(
  {
    children,
    open,
    transitionDuration = defaultTransitionDuration,
    fullWidth,
    fullScreen,
    onClose,
    overlayCustomStyle,
    customStyle,
    ...props
  },
  ref
) {
  const { overlay, push, update, reset, getActiveOverlayState } = useOverlay();

  const idRef = useRef(`dialog-${createUniqueKey(`${Math.floor(Math.random() * 100000)}`)}`);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeOverlayState = getActiveOverlayState(idRef.current, 'dialog');

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    if (open) {
      push({
        id: idRef.current,
        status: 'pending',
        from: 'dialog',
        props: {
          onClose,
          transitionDuration,
          overlayCustomStyle
        }
      });
    }
  }, [open, push, onClose, transitionDuration, overlayCustomStyle]);

  useEffect(() => {
    if (activeOverlayState?.status === 'pending') {
      dialogOpenTimerRef.current = setTimeout(() => {
        // TODO 추후 애니메이션 재사용 가능하도록 개선
        if (dialogRef.current) {
          dialogRef.current.style.opacity = '1';
          dialogRef.current.style.transform = 'scale(1)';
          dialogRef.current.style.visibility = 'visible';
        }
        update(idRef.current, 'active');
      }, transitionDuration);
    }
  }, [activeOverlayState, transitionDuration, update]);

  useEffect(() => {
    if (activeOverlayState?.status === 'active') {
      if (dialogRef.current) {
        dialogRef.current.style.pointerEvents = 'auto';
      }
    }
  }, [activeOverlayState?.status]);

  useEffect(() => {
    if (open || !dialogRef.current) return;
    if (activeOverlayState?.status !== 'active') return;

    dialogRef.current.style.opacity = '0';
    dialogRef.current.style.transform = 'scale(0.7)';

    dialogCloseTimerRef.current = setTimeout(() => {
      update(idRef.current, 'fulfilled');
    }, transitionDuration);
  }, [open, activeOverlayState, transitionDuration, update]);

  useEffect(() => {
    return () => {
      if (dialogOpenTimerRef.current) {
        clearTimeout(dialogOpenTimerRef.current);
      }
      if (dialogCloseTimerRef.current) {
        clearTimeout(dialogCloseTimerRef.current);
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
    <Wrapper ref={ref} fullWidth={fullWidth} fullScreen={fullScreen}>
      <StyledDialog
        ref={dialogRef}
        fullScreen={fullScreen}
        transitionDuration={transitionDuration}
        onClick={handleClick}
        {...props}
        css={customStyle}
      >
        {children}
      </StyledDialog>
    </Wrapper>,
    overlay.root
  );
});

export default Dialog;
