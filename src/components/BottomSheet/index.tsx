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

import { GenericComponentProps } from '../../types';
import { Content, Rectangle, StyledBottomSheet, SwipeZone, Wrapper } from './BottomSheet.styles';

export interface BottomSheetProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  transitionDuration?: number;
  disableHeaderSwipeableClose?: boolean;
  disableContentSwipeableClose?: boolean;
  onClose: () => void;
}

const BottomSheet = forwardRef<HTMLDivElement, PropsWithChildren<BottomSheetProps>>(
  function BottomSheet(
    {
      children,
      open,
      transitionDuration = 225,
      disableHeaderSwipeableClose = false,
      disableContentSwipeableClose = false,
      onClose,
      customStyle,
      ...props
    },
    ref
  ) {
    const [isMounted, setIsMounted] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [headerSwipeableClose, setHeaderSwipeableClose] = useState(false);
    const [contentSwipeableClose, setContentSwipeableClose] = useState(false);

    const sheetPortalRef = useRef<HTMLElement | null>(null);
    const sheetRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const sheetSwipeZoneRef = useRef<HTMLDivElement>(null);
    const sheetOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const sheetCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const sheetTranslateYRef = useRef(0);
    const prevTouchMoveClientY = useRef(0);
    const touchMoveTranslateYRef = useRef(0);

    const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

    const handleMouseDown = () => setHeaderSwipeableClose(true);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      if (headerSwipeableClose && sheetRef.current) {
        const translateY =
          event.clientY - (window.innerHeight - (sheetRef.current?.clientHeight || 0));

        if (translateY <= 0) return;

        sheetRef.current?.setAttribute('style', `transform: translateY(${translateY}px)`);
        sheetTranslateYRef.current = translateY;
      } else if (contentSwipeableClose && sheetRef.current) {
        if (prevTouchMoveClientY.current < event.clientY) {
          touchMoveTranslateYRef.current += 5;
        } else {
          touchMoveTranslateYRef.current -= 5;
        }

        const translateY = touchMoveTranslateYRef.current;

        if (translateY <= 0) return;

        prevTouchMoveClientY.current = event.clientY;
        sheetRef.current?.setAttribute('style', `transform: translateY(${translateY}px)`);
        sheetTranslateYRef.current = translateY;
      }
    };

    const handleTouchStart = () => setHeaderSwipeableClose(true);

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
      if (headerSwipeableClose && sheetRef.current) {
        const translateY =
          event.touches.item(0).clientY -
          (window.innerHeight - (sheetRef.current?.clientHeight || 0));

        if (translateY <= 0) return;

        sheetRef.current?.setAttribute('style', `transform: translateY(${translateY}px)`);
        sheetTranslateYRef.current = translateY;
      }
    };

    const handleEndSwipeable = () => {
      if ((headerSwipeableClose || contentSwipeableClose) && sheetRef.current) {
        const swipedPercentage =
          (sheetTranslateYRef.current / (sheetRef.current?.clientHeight || 0)) * 100;

        sheetRef.current?.removeAttribute('style');

        const limit = headerSwipeableClose ? 25 : 10;

        if (swipedPercentage >= limit) {
          onClose();
        }
      }

      setHeaderSwipeableClose(false);
      setContentSwipeableClose(false);
    };

    const handleMouseDownContent = () => {
      if (!contentRef.current || contentRef.current.scrollTop > 0 || disableContentSwipeableClose)
        return;

      setContentSwipeableClose(true);
    };

    const handleTouchStartContent = () => {
      if (!contentRef.current || contentRef.current.scrollTop > 0 || disableContentSwipeableClose)
        return;

      setContentSwipeableClose(true);
    };

    const handleTouchMoveContent = (event: TouchEvent<HTMLDivElement>) => {
      if (contentSwipeableClose && sheetRef.current) {
        if (prevTouchMoveClientY.current < event.touches.item(0).clientY) {
          touchMoveTranslateYRef.current += 5;
        } else {
          touchMoveTranslateYRef.current -= 5;
        }

        const translateY = touchMoveTranslateYRef.current;

        if (translateY <= 0) return;

        prevTouchMoveClientY.current = event.touches.item(0).clientY;
        sheetRef.current?.setAttribute('style', `transform: translateY(${translateY}px)`);
        sheetTranslateYRef.current = translateY;
      }
    };

    const handleEndSwipeableContent = () => {
      if (contentSwipeableClose && sheetRef.current) {
        const swipedPercentage =
          (sheetTranslateYRef.current / (sheetRef.current?.clientHeight || 0)) * 100;

        sheetRef.current?.removeAttribute('style');

        if (swipedPercentage >= 10) {
          onClose();
        }
      }

      setContentSwipeableClose(false);
    };

    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';

        let sheet = document.getElementById('sheet-root');

        if (!sheet) {
          sheet = document.createElement('div');
          sheet.id = 'sheet-root';
          sheet.style.position = 'fixed';
          sheet.style.top = '0';
          sheet.style.left = '0';
          sheet.style.width = '100%';
          sheet.style.height = '100%';
          sheet.style.zIndex = '1000';
          sheet.setAttribute('role', 'presentation');

          document.body.appendChild(sheet);
        }

        sheetPortalRef.current = sheet;

        setIsMounted(true);

        if (sheetCloseTimerRef.current) {
          clearTimeout(sheetCloseTimerRef.current);
        }

        sheetOpenTimerRef.current = setTimeout(() => setSheetOpen(true), 100);
      }
    }, [open]);

    useEffect(() => {
      if (!open && sheetOpen && sheetPortalRef.current) {
        if (sheetOpenTimerRef.current) {
          clearTimeout(sheetOpenTimerRef.current);
        }

        sheetCloseTimerRef.current = setTimeout(() => {
          sheetPortalRef.current?.remove();
          sheetPortalRef.current = null;

          setIsMounted(false);
          setSheetOpen(false);
          setHeaderSwipeableClose(false);
          setContentSwipeableClose(false);

          document.body.removeAttribute('style');
        }, transitionDuration + 100);
      }
    }, [open, sheetOpen, transitionDuration]);

    useEffect(() => {
      return () => {
        if (sheetOpenTimerRef.current) {
          clearTimeout(sheetOpenTimerRef.current);
        }
        if (sheetCloseTimerRef.current) {
          clearTimeout(sheetCloseTimerRef.current);
        }
        if (sheetPortalRef.current) {
          sheetPortalRef.current?.remove();
          sheetPortalRef.current = null;

          setIsMounted(false);
          setSheetOpen(false);
          setHeaderSwipeableClose(false);
          setContentSwipeableClose(false);
        }
        document.body.removeAttribute('style');
      };
    }, []);

    useEffect(() => {
      if (!headerSwipeableClose || !contentSwipeableClose) {
        prevTouchMoveClientY.current = 0;
        touchMoveTranslateYRef.current = 0;
      }
    }, [headerSwipeableClose, contentSwipeableClose]);

    if (isMounted && sheetPortalRef.current) {
      return createPortal(
        <Wrapper
          ref={ref}
          sheetOpen={sheetOpen}
          sheetClose={!open}
          transitionDuration={transitionDuration}
          onClick={onClose}
          onMouseMove={handleMouseMove}
          onMouseUp={handleEndSwipeable}
        >
          <StyledBottomSheet
            ref={sheetRef}
            sheetOpen={sheetOpen}
            sheetClose={!open}
            transitionDuration={transitionDuration}
            onClick={handleClick}
            css={customStyle}
          >
            {!disableHeaderSwipeableClose && (
              <SwipeZone
                ref={sheetSwipeZoneRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleEndSwipeable}
              >
                <Rectangle />
              </SwipeZone>
            )}
            <Content
              {...props}
              ref={contentRef}
              onMouseDown={handleMouseDownContent}
              onTouchStart={handleTouchStartContent}
              onTouchMove={handleTouchMoveContent}
              onTouchEnd={handleEndSwipeableContent}
            >
              {children}
            </Content>
          </StyledBottomSheet>
        </Wrapper>,
        sheetPortalRef.current
      );
    }

    return null;
  }
);

export default BottomSheet;
