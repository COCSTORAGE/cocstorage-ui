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
import { CustomStyle, GenericComponentProps } from '@typings';
import createUniqueKey from '@utils';
import { createPortal } from 'react-dom';

import { StyledDialog, Wrapper, WrapperInner } from './Dialog.styles';

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
  const { overlay, push, update, reset, getCurrentOverlayState, getOverlayState } = useOverlay();

  const idRef = useRef(`dialog-${createUniqueKey(`${Math.floor(Math.random() * 100000)}`)}`);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentOverlayState = getCurrentOverlayState(idRef.current, 'dialog');
  const hasOverlayState = !!getOverlayState(idRef.current, 'dialog');

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    if (open && !hasOverlayState) {
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
  }, [open, push, onClose, transitionDuration, overlayCustomStyle, hasOverlayState]);

  useEffect(() => {
    if (currentOverlayState?.status === 'pending') {
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
  }, [currentOverlayState, transitionDuration, update]);

  useEffect(() => {
    if (currentOverlayState?.status === 'active') {
      if (dialogRef.current) {
        dialogRef.current.style.pointerEvents = 'auto';
      }
    }
  }, [currentOverlayState?.status]);

  useEffect(() => {
    if (open || !dialogRef.current) return;
    if (currentOverlayState?.status !== 'active') return;

    dialogRef.current.style.opacity = '0';
    dialogRef.current.style.transform = 'scale(0.7)';

    dialogCloseTimerRef.current = setTimeout(() => {
      update(idRef.current, 'fulfilled');
    }, transitionDuration);
  }, [open, currentOverlayState, transitionDuration, update]);

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

  if (!overlay.root || !currentOverlayState) return null;

  return createPortal(
    <Wrapper ref={ref} onClick={onClose}>
      <WrapperInner fullWidth={fullWidth} fullScreen={fullScreen}>
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
      </WrapperInner>
    </Wrapper>,
    overlay.root
  );
});

export default Dialog;
