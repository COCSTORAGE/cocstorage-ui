import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import { GenericComponentProps } from 'src/typings';

import { StyledIconButton } from './IconButton.styles';

export interface IconButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  rotation?: number;
}

const IconButton = forwardRef<HTMLButtonElement, PropsWithChildren<IconButtonProps>>(
  function IconButton({ children, rotation = 0, customStyle, ...props }, ref) {
    return (
      <StyledIconButton
        ref={ref}
        {...props}
        css={customStyle}
        style={{
          transform: `rotate(${rotation}deg)`
        }}
      >
        {children}
      </StyledIconButton>
    );
  }
);

export default IconButton;
