import React, { memo, PropsWithChildren, ButtonHTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledIconButton } from './IconButton.styles';

export interface IconButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  rotation?: number;
}

function IconButton({
  children,
  ref,
  rotation = 0,
  customStyle,
  ...props
}: PropsWithChildren<IconButtonProps>) {
  return (
    <StyledIconButton ref={ref} rotation={rotation} css={customStyle} {...props}>
      {children}
    </StyledIconButton>
  );
}

export default memo(IconButton);
