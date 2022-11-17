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
    const measureRef = useRef({
      startClientY: 0,
      lastTranslateY: 0
    });

    const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

    const handleMouseDown = () => setHeaderSwipeableClose(true);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      if (headerSwipeableClose && sheetRef.current) {
        let translateY =
          event.clientY - (window.innerHeight - (sheetRef.current.clientHeight || 0));

        if (translateY <= 0) {
          translateY = 0;
        }

        sheetRef.current.setAttribute('style', `transform: translateY(${translateY}px)`);
        measureRef.current.lastTranslateY = translateY;
      } else if (contentSwipeableClose && sheetRef.current && contentRef.current) {
        let translateY = event.clientY - measureRef.current.startClientY;

        event.preventDefault();

        if (translateY <= 0) {
          translateY = 0;
        }

        sheetRef.current.setAttribute('style', `transform: translateY(${translateY}px)`);
        measureRef.current.lastTranslateY = translateY;
      }
    };

    const handleTouchStart = () => setHeaderSwipeableClose(true);

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
      if (!headerSwipeableClose || !sheetRef.current) return;

      let translateY =
        event.touches[0].clientY - (window.innerHeight - (sheetRef.current.clientHeight || 0));

      if (translateY <= 0) {
        translateY = 0;
      }

      sheetRef.current.setAttribute('style', `transform: translateY(${translateY}px)`);
      measureRef.current.lastTranslateY = translateY;
    };

    const handleEndSwipeable = () => {
      if ((!headerSwipeableClose && !contentSwipeableClose) || !sheetRef.current) return;

      const swipedPercentage =
        (measureRef.current.lastTranslateY / (sheetRef.current.clientHeight || 0)) * 100;

      sheetRef.current.removeAttribute('style');

      if (swipedPercentage >= 10) {
        onClose();
      }

      measureRef.current = {
        startClientY: 0,
        lastTranslateY: 0
      };

      setHeaderSwipeableClose(false);
      setContentSwipeableClose(false);
    };

    const handleMouseDownContent = (event: MouseEvent<HTMLDivElement>) => {
      if (disableContentSwipeableClose || !contentRef.current || contentRef.current.scrollTop > 0)
        return;

      measureRef.current.startClientY = event.clientY;
      setContentSwipeableClose(true);
    };

    const handleTouchStartContent = (event: TouchEvent<HTMLDivElement>) => {
      if (disableContentSwipeableClose || !sheetRef.current || !contentRef.current) return;

      if (contentRef.current.scrollTop > 0) return;

      measureRef.current.startClientY = event.touches[0].clientY;
      setContentSwipeableClose(true);
    };

    const handleTouchMoveContent = (event: TouchEvent<HTMLDivElement>) => {
      if (!contentSwipeableClose || !sheetRef.current || !contentRef.current) return;

      event.preventDefault();

      let translateY = event.touches[0].clientY - measureRef.current.startClientY;

      if (translateY <= 0) {
        translateY = 0;
      }

      sheetRef.current.setAttribute('style', `transform: translateY(${translateY}px)`);
      measureRef.current.lastTranslateY = translateY;
    };

    const handleEndSwipeableContent = () => {
      if (!contentSwipeableClose || !sheetRef.current || !contentRef.current) return;

      const swipedPercentage =
        (measureRef.current.lastTranslateY / (sheetRef.current.clientHeight || 0)) * 100;

      sheetRef.current.removeAttribute('style');

      if (swipedPercentage >= 10) {
        onClose();
      }

      setContentSwipeableClose(false);
      measureRef.current = {
        startClientY: 0,
        lastTranslateY: 0
      };
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
          measureRef.current = {
            startClientY: 0,
            lastTranslateY: 0
          };
        }
        document.body.removeAttribute('style');
      };
    }, []);

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
