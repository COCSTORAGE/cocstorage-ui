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
  disableSwipeable?: boolean;
  onClose: () => void;
}

const BottomSheet = forwardRef<HTMLDivElement, PropsWithChildren<BottomSheetProps>>(
  function BottomSheet(
    {
      children,
      open,
      transitionDuration = 225,
      disableSwipeable = false,
      onClose,
      customStyle,
      ...props
    },
    ref
  ) {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [sheetOpen, setSheetOpen] = useState<boolean>(false);
    const [swipeable, setSwipeable] = useState<boolean>(false);

    const sheetPortalRef = useRef<HTMLElement | null>(null);
    const sheetRef = useRef<HTMLDivElement | null>(null);
    const sheetSwipeZoneRef = useRef<HTMLDivElement | null>(null);
    const sheetOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const sheetCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const sheetTranslateYRef = useRef<number>(0);

    const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

    const handleMouseDown = () => setSwipeable(true);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      if (swipeable && sheetRef.current) {
        const translateY =
          event.clientY - (document.body.clientHeight - (sheetRef.current?.clientHeight || 0));

        if (translateY < 0) return;

        sheetRef.current?.setAttribute('style', `transform: translateY(${translateY}px)`);
        sheetTranslateYRef.current = translateY;
      }
    };

    const handleTouchStart = () => setSwipeable(true);

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
      if (swipeable && sheetRef.current) {
        const translateY =
          event.touches.item(0).clientY -
          (document.body.clientHeight - (sheetRef.current?.clientHeight || 0));

        if (translateY < 0) return;

        sheetRef.current?.setAttribute('style', `transform: translateY(${translateY}px)`);
        sheetTranslateYRef.current = translateY;
      }
    };

    const handleEndSwipeable = () => {
      if (swipeable && sheetRef.current) {
        const swipedPercentage =
          (sheetTranslateYRef.current / (sheetRef.current?.clientHeight || 0)) * 100;

        sheetRef.current?.removeAttribute('style');

        if (swipedPercentage > 25) {
          onClose();
        }
      }

      setSwipeable(false);
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
          setSwipeable(false);

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
          setSwipeable(false);
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
            {!disableSwipeable && (
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
            <Content {...props}>{children}</Content>
          </StyledBottomSheet>
        </Wrapper>,
        sheetPortalRef.current
      );
    }

    return null;
  }
);

export default BottomSheet;
