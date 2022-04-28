import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  memo,
  PropsWithChildren,
  HTMLAttributes,
  MouseEvent,
  RefObject
} from 'react';
import { createPortal } from 'react-dom';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { Wrapper, StyledDialog } from './Dialog.styles';

export interface DialogProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>> {
  ref?: RefObject<HTMLDivElement>;
  open: boolean;
  transitionDuration?: number;
  fullScreen?: boolean;
  onClose: () => void;
}

function Dialog({
  children,
  ref,
  open,
  transitionDuration = 225,
  fullScreen,
  onClose,
  customStyle,
  ...props
}: PropsWithChildren<DialogProps>) {
  const { theme } = useTheme();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [dialogClose, setDialogClose] = useState<boolean>(false);

  const dialogPortalRef = useRef<HTMLElement | null>(null);
  const dialogOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClose = useCallback(() => setDialogClose(true), []);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => event.stopPropagation(),
    []
  );

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
    if (dialogClose) {
      if (dialogOpenTimerRef.current) {
        clearTimeout(dialogOpenTimerRef.current);
      }

      dialogCloseTimerRef.current = setTimeout(onClose, transitionDuration + 100);
    }
  }, [dialogClose, transitionDuration, onClose]);

  useEffect(() => {
    if (!open && dialogClose && dialogPortalRef.current) {
      dialogPortalRef.current?.remove();
      dialogPortalRef.current = null;

      setIsMounted(false);
      setDialogOpen(false);
      setDialogClose(false);

      document.body.removeAttribute('style');
    }
  }, [open, dialogClose]);

  if (isMounted && dialogPortalRef.current) {
    return createPortal(
      <Wrapper
        ref={ref}
        dialogOpen={dialogOpen}
        dialogClose={dialogClose}
        transitionDuration={transitionDuration}
        fullScreen={fullScreen}
        onClick={handleClose}
        role="dialog"
      >
        <StyledDialog
          theme={theme}
          dialogOpen={dialogOpen}
          dialogClose={dialogClose}
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
}

export default memo(Dialog);
