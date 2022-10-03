import { HTMLAttributes, MouseEvent, forwardRef } from 'react';

import { GenericComponentProps } from '../../types';

import { Content, StyledBackdrop } from './Backdrop.styles';

export interface BackdropProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  transitionDuration?: number;
  onClose: () => void;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(
  { children, open, transitionDuration = 225, onClose, customStyle, ...props },
  ref
) {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  return (
    <StyledBackdrop
      ref={ref}
      open={open}
      transitionDuration={transitionDuration}
      {...props}
      onClick={onClose}
      css={customStyle}
    >
      <Content onClick={handleClick}>{children}</Content>
    </StyledBackdrop>
  );
});

export default Backdrop;
