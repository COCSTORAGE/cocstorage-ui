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

import { defaultTransitionDuration } from '@constants';
import useOverlay from '@theme/hooks/useOverlay';
import { CustomStyle, GenericComponentProps } from '@typings';
import createUniqueKey from '@utils';
import { createPortal } from 'react-dom';

import { Content, Rectangle, StyledBottomSheet, SwipeZone, Wrapper } from './BottomSheet.styles';

export interface BottomSheetProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  transitionDuration?: number;
  disableHeaderSwipeableClose?: boolean;
  disableContentSwipeableClose?: boolean;
  onClose: () => void;
  overlayCustomStyle?: CustomStyle;
}

const BottomSheet = forwardRef<HTMLDivElement, PropsWithChildren<BottomSheetProps>>(
  function BottomSheet(
    {
      children,
      open,
      transitionDuration = defaultTransitionDuration,
      disableHeaderSwipeableClose = false,
      disableContentSwipeableClose = false,
      onClose,
      overlayCustomStyle,
      customStyle,
      ...props
    },
    ref
  ) {
    const { overlay, push, update, reset, getCurrentOverlayState, getOverlayState } = useOverlay();

    const [headerSwipeableClose, setHeaderSwipeableClose] = useState(false);
    const [contentSwipeableClose, setContentSwipeableClose] = useState(false);

    const idRef = useRef(`bottomSheet-${createUniqueKey(`${Math.floor(Math.random() * 100000)}`)}`);
    const sheetRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const sheetSwipeZoneRef = useRef<HTMLDivElement>(null);
    const sheetOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const sheetCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const measureRef = useRef({
      startClientY: 0,
      lastTranslateY: 0
    });

    const currentOverlayState = getCurrentOverlayState(idRef.current, 'bottomSheet');
    const hasOverlayState = !!getOverlayState(idRef.current, 'bottomSheet');

    const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

    const handleMouseDown = () => setHeaderSwipeableClose(true);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      if (headerSwipeableClose && sheetRef.current) {
        let translateY =
          event.clientY - (window.innerHeight - (sheetRef.current.clientHeight || 0));

        if (translateY <= 0) {
          translateY = 0;
        }

        sheetRef.current.style.transform = `translateY(${translateY}px)`;
        measureRef.current.lastTranslateY = translateY;
      } else if (contentSwipeableClose && sheetRef.current && contentRef.current) {
        let translateY = event.clientY - measureRef.current.startClientY;

        if (translateY <= 0) {
          translateY = 0;
        }

        sheetRef.current.style.transform = `translateY(${translateY}px)`;
        measureRef.current.lastTranslateY = translateY;
      }
    };

    const handleTouchStart = () => {
      setHeaderSwipeableClose(true);
    };

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
      if (!headerSwipeableClose || !sheetRef.current) return;

      let translateY =
        event.touches[0].clientY - (window.innerHeight - (sheetRef.current.clientHeight || 0));

      if (translateY <= 0) {
        translateY = 0;
      }

      sheetRef.current.style.transform = `translateY(${translateY}px)`;
      measureRef.current.lastTranslateY = translateY;
    };

    const handleEndSwipeable = () => {
      if ((!headerSwipeableClose && !contentSwipeableClose) || !sheetRef.current) return;

      const swipedPercentage =
        (measureRef.current.lastTranslateY / (sheetRef.current.clientHeight || 0)) * 100;

      if (swipedPercentage >= 10) {
        sheetRef.current.removeAttribute('style');
        onClose();
      }

      setHeaderSwipeableClose(false);
      setContentSwipeableClose(false);
      measureRef.current = {
        startClientY: 0,
        lastTranslateY: 0
      };
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

      let translateY = event.touches[0].clientY - measureRef.current.startClientY;

      if (translateY <= 0) {
        translateY = 0;
      }

      sheetRef.current.style.transform = `translateY(${translateY}px)`;
      measureRef.current.lastTranslateY = translateY;
    };

    useEffect(() => {
      if (open && !hasOverlayState) {
        push({
          id: idRef.current,
          status: 'pending',
          props: {
            onClose,
            transitionDuration,
            overlayCustomStyle
          },
          from: 'bottomSheet'
        });
      }
    }, [onClose, open, overlayCustomStyle, push, transitionDuration, hasOverlayState]);

    useEffect(() => {
      if (currentOverlayState?.status === 'pending') {
        sheetOpenTimerRef.current = setTimeout(() => {
          if (sheetRef.current) {
            sheetRef.current.style.transform = 'translateY(0)';
          }
          update(idRef.current, 'active');
        }, transitionDuration);
      }
    }, [currentOverlayState, transitionDuration, update]);

    useEffect(() => {
      if (!sheetRef.current) return;

      if (currentOverlayState?.status === 'active') {
        sheetRef.current.style.pointerEvents = 'auto';
      }
    }, [currentOverlayState?.status]);

    useEffect(() => {
      if (open || !sheetRef.current) return;
      if (currentOverlayState?.status !== 'active') return;

      sheetRef.current.style.transform = 'translateY(100%)';

      sheetCloseTimerRef.current = setTimeout(() => {
        update(idRef.current, 'fulfilled');
        setHeaderSwipeableClose(false);
        setContentSwipeableClose(false);
        measureRef.current = {
          startClientY: 0,
          lastTranslateY: 0
        };
      }, transitionDuration);
    }, [open, overlay.root, currentOverlayState, transitionDuration, update]);

    useEffect(() => {
      return () => {
        if (sheetOpenTimerRef.current) {
          clearTimeout(sheetOpenTimerRef.current);
        }
        if (sheetCloseTimerRef.current) {
          clearTimeout(sheetCloseTimerRef.current);
        }
        setHeaderSwipeableClose(false);
        setContentSwipeableClose(false);
        measureRef.current = {
          startClientY: 0,
          lastTranslateY: 0
        };
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
      <Wrapper
        ref={ref}
        onClick={onClose}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEndSwipeable}
        transitionDuration={transitionDuration}
      >
        <StyledBottomSheet
          ref={sheetRef}
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
            onTouchEnd={handleEndSwipeable}
          >
            {children}
          </Content>
        </StyledBottomSheet>
      </Wrapper>,
      overlay.root
    );
  }
);

export default BottomSheet;
