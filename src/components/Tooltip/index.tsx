import { HTMLAttributes, ReactElement, forwardRef, useEffect, useRef, useState } from 'react';

import { defaultTransitionDuration } from '@constants';

import { CustomStyle, GenericComponentProps, Variant } from '@typings';

import { StyledTooltip, Wrapper, WrapperInner } from './Tooltip.styles';

export interface TooltipProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'content'>> {
  variant?: Extract<Variant, 'accent' | 'semiAccent'>;
  open: boolean;
  placement?: 'top' | 'left' | 'right' | 'bottom';
  transitionDuration?: number;
  content: ReactElement | string;
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
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && wrapperRef.current && tooltipRef.current) {
      const { clientWidth: wrapperClientWidth, clientHeight: wrapperClientHeight } =
        wrapperRef.current;
      const { clientWidth: tooltipClientWidth, clientHeight: tooltipClientHeight } =
        tooltipRef.current;
      setWrapperWidth(wrapperClientWidth);
      setWrapperHeight(wrapperClientHeight);
      setTooltipWidth(tooltipClientWidth);
      setTooltipHeight(tooltipClientHeight);
      setTooltipOpen(true);
    } else {
      setTooltipOpen(false);
    }
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (open && wrapperRef.current && tooltipRef.current) {
        const { clientWidth: wrapperClientWidth, clientHeight: wrapperClientHeight } =
          wrapperRef.current;
        const { clientWidth: tooltipClientWidth, clientHeight: tooltipClientHeight } =
          tooltipRef.current;
        setWrapperWidth(wrapperClientWidth);
        setWrapperHeight(wrapperClientHeight);
        setTooltipWidth(tooltipClientWidth);
        setTooltipHeight(tooltipClientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
    <Wrapper ref={ref}>
      <WrapperInner ref={wrapperRef} css={wrapperCustomStyle}>
        {children}
        <StyledTooltip
          ref={tooltipRef}
          variant={variant}
          placement={placement}
          transitionDuration={transitionDuration}
          wrapperWidth={wrapperWidth}
          wrapperHeight={wrapperHeight}
          tooltipWidth={tooltipWidth}
          tooltipHeight={tooltipHeight}
          tooltipOpen={tooltipOpen}
          centered={centered}
          left={left}
          triangleLeft={triangleLeft}
          {...props}
          css={customStyle}
        >
          {content}
        </StyledTooltip>
      </WrapperInner>
    </Wrapper>
  );
});

export default Tooltip;
