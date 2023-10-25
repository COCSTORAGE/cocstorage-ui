import { HTMLAttributes, ReactElement, forwardRef, useEffect, useRef, useState } from 'react';

import { defaultTransitionDuration } from '@constants';

import { CustomStyle, GenericComponentProps, Variant } from '@typings';

import { StyledTooltip, Wrapper } from './Tooltip.styles';

export interface TooltipProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'content'>> {
  variant?: Extract<Variant, 'accent' | 'semiAccent'>;
  open: boolean;
  placement?: 'top' | 'left' | 'right' | 'bottom';
  transitionDuration?: number;
  content: ReactElement | string;
  fillWrapper?: boolean;
  centered?: boolean;
  left?: number;
  triangleLeft?: number;
  onClose: () => void;
  disableOnClose?: boolean;
  wrapperCustomStyle?: CustomStyle;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(
  {
    children,
    variant = 'accent',
    open,
    placement = 'bottom',
    transitionDuration = defaultTransitionDuration,
    content,
    fillWrapper,
    centered = true,
    left = 0,
    triangleLeft = 10,
    onClose,
    disableOnClose,
    wrapperCustomStyle,
    customStyle,
    ...props
  },
  ref
) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [wrapperClientWidth, setWrapperClientWidth] = useState(0);
  const [wrapperClientHeight, setWrapperClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      setWrapperClientWidth(wrapperRef.current?.clientWidth || 0);
      setWrapperClientHeight(wrapperRef.current?.clientHeight || 0);
      setClientWidth(tooltipRef.current?.clientWidth || 0);
      setClientHeight(tooltipRef.current?.clientHeight || 0);
      setTooltipOpen(true);
    } else {
      setTooltipOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (!disableOnClose && tooltipOpen) {
      window.addEventListener('click', onClose);
    }

    return () => {
      if (!disableOnClose && tooltipOpen) {
        window.removeEventListener('click', onClose);
      }
    };
  }, [tooltipOpen, disableOnClose, onClose]);

  return (
    <div ref={ref}>
      <Wrapper ref={wrapperRef} fillWrapper={fillWrapper} css={wrapperCustomStyle}>
        {children}
        <StyledTooltip
          ref={tooltipRef}
          variant={variant}
          placement={placement}
          transitionDuration={transitionDuration}
          wrapperClientWidth={wrapperClientWidth}
          wrapperClientHeight={wrapperClientHeight}
          clientWidth={clientWidth}
          clientHeight={clientHeight}
          tooltipOpen={tooltipOpen}
          centered={centered}
          left={left}
          triangleLeft={triangleLeft}
          {...props}
          css={customStyle}
        >
          {content}
        </StyledTooltip>
      </Wrapper>
    </div>
  );
});

export default Tooltip;
