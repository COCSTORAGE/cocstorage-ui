import React, { forwardRef, PropsWithChildren, ButtonHTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledIconButton } from './IconButton.styles';

export interface IconButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  rotation?: number;
}

const IconButton = forwardRef<HTMLButtonElement, PropsWithChildren<IconButtonProps>>(
  function IconButton({ children, rotation = 0, customStyle, ...props }, ref) {
    return (
      <StyledIconButton ref={ref} rotation={rotation} css={customStyle} {...props}>
        {children}
      </StyledIconButton>
    );
  }
);

export default IconButton;
