import { ElementType, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import { StyledHidden } from './Hidden.styles';
import { GenericComponentProps } from '../../types';

export interface HiddenProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  component?: ElementType;
  xsHidden?: boolean;
  smHidden?: boolean;
  mdHidden?: boolean;
  lgHidden?: boolean;
  xlHidden?: boolean;
}

const Hidden = forwardRef<HTMLDivElement, PropsWithChildren<HiddenProps>>(function Hidden(
  { children, component = 'div', xsHidden, smHidden, mdHidden, lgHidden, xlHidden, customStyle },
  ref
) {
  return (
    <StyledHidden
      ref={ref}
      as={component}
      xsHidden={xsHidden}
      smHidden={smHidden}
      mdHidden={mdHidden}
      lgHidden={lgHidden}
      xlHidden={xlHidden}
      css={customStyle}
    >
      {children}
    </StyledHidden>
  );
});

export default Hidden;
