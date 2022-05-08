import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  PropsWithChildren,
  HTMLAttributes,
  MouseEvent
} from 'react';
import { createPortal } from 'react-dom';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledDialog } from './Dialog.styles';

export interface DialogProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>> {
  open: boolean;
  transitionDuration?: number;
  fullScreen?: boolean;
  onClose: () => void;
}

const Dialog = forwardRef<HTMLDivElement, PropsWithChildren<DialogProps>>(function Dialog(
  { children, open, transitionDuration = 225, fullScreen, onClose, customStyle, ...props },
  ref
) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const dialogPortalRef = useRef<HTMLElement | null>(null);
  const dialogOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

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
        dialogPortalRef.current?.remove();
        dialogPortalRef.current = null;

        setIsMounted(false);
        setDialogOpen(false);

        document.body.removeAttribute('style');
      }, transitionDuration + 100);
    }
  }, [open, dialogOpen, transitionDuration]);

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
      >
        <StyledDialog
          dialogOpen={dialogOpen}
          dialogClose={!open}
          transitionDuration={transitionDuration}
          fullScreen={fullScreen}
          onClick={handleClick}
          css={customStyle}
          {...props}
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
