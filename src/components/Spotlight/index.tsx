import { HTMLAttributes, RefObject, forwardRef, useEffect, useState } from 'react';

import Backdrop from '@components/Backdrop';

import Tooltip from '@components/Tooltip';
import { defaultTransitionDuration } from '@constants';
import { CSSValue, GenericComponentProps } from '@typings';

import { StyledSpotlight } from './Spotlight.styles';

export interface SpotlightProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  targetRef: RefObject<HTMLElement>;
  round?: CSSValue;
  transitionDuration?: number;
  tooltip?: {
    placement?: 'top' | 'left' | 'right' | 'bottom';
    content?: string;
    centered?: boolean;
    left?: number;
    triangleLeft?: number;
    onClick?: () => void;
    disableOnClose?: boolean;
  };
  onClose: () => void;
}

const Spotlight = forwardRef<HTMLDivElement, SpotlightProps>(function Spotlight(
  {
    open,
    targetRef,
    round,
    transitionDuration = defaultTransitionDuration,
    tooltip: { content = '', onClick, ...tooltipProps } = {},
    onClose,
    customStyle,
    ...props
  },
  ref
) {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && targetRef.current) {
      const { clientWidth, clientHeight } = targetRef.current;
      const { top: bcrTop, left: bcrLeft } = targetRef.current.getBoundingClientRect();
      setTop(bcrTop);
      setLeft(bcrLeft);
      setWidth(clientWidth);
      setHeight(clientHeight);
    }
  }, [open, targetRef]);

  useEffect(() => {
    const handleResizeAndScroll = () => {
      if (open && targetRef.current) {
        const { clientWidth, clientHeight } = targetRef.current;
        const { top: bcrTop, left: bcrLeft } = targetRef.current.getBoundingClientRect();
        setTop(bcrTop);
        setLeft(bcrLeft);
        setWidth(clientWidth);
        setHeight(clientHeight);
      }
    };

    window.addEventListener('resize', handleResizeAndScroll);
    window.addEventListener('scroll', handleResizeAndScroll);

    return () => {
      window.removeEventListener('resize', handleResizeAndScroll);
      window.removeEventListener('scroll', handleResizeAndScroll);
    };
  }, [open, targetRef]);

  return (
    <Backdrop open={open} onClose={onClose} transitionDuration={transitionDuration}>
      <StyledSpotlight
        ref={ref}
        open={open}
        round={round}
        transitionDuration={transitionDuration}
        {...props}
        css={customStyle}
        style={{
          width,
          height,
          top,
          left,
          ...props.style
        }}
      >
        <Tooltip open={!!content} content={content} onClose={onClose} {...tooltipProps}>
          <div
            onClick={onClick}
            role="presentation"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: targetRef.current?.outerHTML || '' }}
          />
        </Tooltip>
      </StyledSpotlight>
    </Backdrop>
  );
});

export default Spotlight;
