import {
  HTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  RefObject,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import { GenericComponentProps } from '../../types';
import { StyledMenu } from './Menu.styles';

export interface MenuProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  anchorRef: RefObject<HTMLElement>;
  open: boolean;
  centered?: boolean;
  triangleLeft?: string;
  onClose: () => void;
}

const Menu = forwardRef<HTMLDivElement, PropsWithChildren<MenuProps>>(function Menu(
  { children, anchorRef, open, centered, triangleLeft = '17px', onClose, customStyle, ...props },
  ref
) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuClose, setMenuClose] = useState<boolean>(false);
  const [menuContentOpen, setMenuContentOpen] = useState<boolean>(false);

  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0
  });

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => setMenuClose(true), []);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    if (open && anchorRef && anchorRef.current) {
      const { top, left } = anchorRef.current.getBoundingClientRect();
      const { clientHeight } = anchorRef.current;
      const { scrollX } = window;

      setMenuPosition({
        top: top + clientHeight,
        left: left + scrollX
      });

      setIsMounted(true);
      setMenuOpen(true);
    }
  }, [open, anchorRef]);

  useEffect(() => {
    if (
      isMounted &&
      menuOpen &&
      !menuContentOpen &&
      menuRef.current &&
      anchorRef &&
      anchorRef.current
    ) {
      const { clientWidth } = menuRef.current;
      const { clientWidth: anchorClientWidth } = anchorRef.current;

      let left = menuPosition.left - clientWidth + anchorClientWidth + 16;

      if (centered) left = menuPosition.left - clientWidth / 2 + anchorClientWidth / 2;

      setMenuPosition({
        top: menuPosition.top + 12,
        left
      });

      setMenuContentOpen(true);
    }
  }, [isMounted, menuOpen, menuContentOpen, anchorRef, menuPosition, centered]);

  useEffect(() => {
    if (menuClose) onClose();
  }, [menuClose, onClose]);

  useEffect(() => {
    if (!open && isMounted) setMenuClose(true);
  }, [open, isMounted]);

  useEffect(() => {
    if (menuContentOpen) {
      window.addEventListener('click', handleClose);
    } else {
      window.removeEventListener('click', handleClose);
    }

    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [menuContentOpen, handleClose]);

  useEffect(() => {
    if (!open && menuClose && menuContentOpen) {
      setIsMounted(false);
      setMenuOpen(false);
      setMenuClose(false);
      setMenuContentOpen(false);

      document.body.removeAttribute('style');
    }
  }, [open, menuClose, menuContentOpen]);

  useEffect(() => {
    return () => {
      setIsMounted(false);
      setMenuOpen(false);
      setMenuClose(false);
      setMenuContentOpen(false);

      document.body.removeAttribute('style');
    };
  }, []);

  if (isMounted) {
    return (
      <StyledMenu
        ref={menuRef || ref}
        menuContentOpen={menuContentOpen}
        menuPosition={menuPosition}
        centered={centered}
        triangleLeft={triangleLeft}
        onClick={handleClick}
        css={customStyle}
        {...props}
        role="menu"
      >
        {children}
      </StyledMenu>
    );
  }

  return null;
});

export default Menu;
