import { HTMLAttributes, RefObject, forwardRef, useEffect, useState } from 'react';

import Backdrop from '@components/Backdrop';

import { GenericComponentProps } from '../../types';
import { StyledSpotlight } from './Spotlight.styles';

export interface SpotlightProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  targetRef: RefObject<HTMLElement>;
  transitionDuration?: number;
  onClose: () => void;
}

const Spotlight = forwardRef<HTMLDivElement, SpotlightProps>(function Spotlight(
  { children, open, targetRef, transitionDuration = 225, onClose, customStyle, ...props },
  ref
) {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (open && targetRef.current) {
      setTop(targetRef.current.offsetTop);
      setLeft(targetRef.current.offsetLeft);
    }
  }, [open, targetRef]);

  return (
    <Backdrop open={open} onClose={onClose} transitionDuration={transitionDuration}>
      <StyledSpotlight
        ref={ref}
        top={top}
        left={left}
        open={open}
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
