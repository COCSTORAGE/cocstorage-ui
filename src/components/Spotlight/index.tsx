import { HTMLAttributes, RefObject, forwardRef, useCallback, useEffect, useState } from 'react';

import Backdrop from '@components/Backdrop';

import { CSSValue, GenericComponentProps } from '@types';

import { StyledSpotlight } from './Spotlight.styles';

export interface SpotlightProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  targetRef: RefObject<HTMLElement>;
  round?: CSSValue;
  transitionDuration?: number;
  onClose: () => void;
}

const Spotlight = forwardRef<HTMLDivElement, SpotlightProps>(function Spotlight(
  { children, open, targetRef, round, transitionDuration = 225, onClose, customStyle, ...props },
  ref
) {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const handleResize = useCallback(() => {
    if (open && targetRef.current) {
      setTop(targetRef.current.offsetTop);
      setLeft(targetRef.current.offsetLeft);
    }
  }, [open, targetRef]);

  useEffect(() => {
    if (open && targetRef.current) {
      setTop(targetRef.current.offsetTop);
      setLeft(targetRef.current.offsetLeft);
    }
  }, [open, targetRef]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <Backdrop open={open} onClose={onClose} transitionDuration={transitionDuration}>
      <StyledSpotlight
        ref={ref}
        top={top}
        left={left}
        open={open}
        round={round}
        transitionDuration={transitionDuration}
        {...props}
        css={customStyle}
      >
        {children}
      </StyledSpotlight>
    </Backdrop>
  );
});

export default Spotlight;
