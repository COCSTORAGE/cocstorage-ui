import { HTMLAttributes, ReactElement, forwardRef, useEffect, useRef, useState } from 'react';

import { GenericComponentProps, Variant } from '../../types';

import { StyledTooltip, Wrapper } from './Tooltip.styles';

export interface TooltipProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  variant?: Extract<Variant, 'accent' | 'semiAccent'>;
  open: boolean;
  placement?: 'top' | 'left' | 'right' | 'bottom';
  content: ReactElement | string;
  centered?: boolean;
  left?: number;
  triangleLeft?: number;
  onClose: () => void;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(
  {
    children,
    variant = 'accent',
    open,
    placement = 'bottom',
    content,
    centered = true,
    left = 0,
    triangleLeft = 10,
    onClose
  },
  ref
) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [wrapperClientWidth, setWrapperClientWidth] = useState(0);
  const [wrapperClientHeight, setWrapperClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      if (wrapperRef.current && tooltipRef.current) {
        setWrapperClientWidth(wrapperRef.current.clientWidth);
        setWrapperClientHeight(wrapperRef.current.clientHeight);
        setClientWidth(tooltipRef.current.clientWidth);
        setClientHeight(tooltipRef.current.clientHeight);
        setTooltipOpen(true);
      }
    } else {
      setTooltipOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (tooltipOpen) {
      window.addEventListener('click', onClose);
    }

    return () => {
      if (tooltipOpen) {
        window.removeEventListener('click', onClose);
      }
    };
  }, [tooltipOpen, onClose]);

  return (
    <div ref={ref}>
      <Wrapper ref={wrapperRef}>
        {children}
        <StyledTooltip
          ref={tooltipRef}
          variant={variant}
          placement={placement}
          wrapperClientWidth={wrapperClientWidth}
          wrapperClientHeight={wrapperClientHeight}
          clientWidth={clientWidth}
          clientHeight={clientHeight}
          tooltipOpen={tooltipOpen}
          centered={centered}
          left={left}
          triangleLeft={triangleLeft}
        >
          {content}
        </StyledTooltip>
      </Wrapper>
    </div>
  );
});

export default Tooltip;
