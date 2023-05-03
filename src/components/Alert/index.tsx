import { HTMLAttributes, PropsWithChildren, ReactElement, forwardRef } from 'react';

import { Message, StyledAlert } from './Alert.styles';
import { GenericComponentProps, Severity } from '../../types';

export interface AlertProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  severity?: Severity;
  icon?: ReactElement;
  action?: ReactElement;
}

const Alert = forwardRef<HTMLDivElement, PropsWithChildren<AlertProps>>(function Alert(
  { children, severity = 'normal', icon, action, customStyle, ...props },
  ref
) {
  return (
    <StyledAlert ref={ref} severity={severity} {...props} css={customStyle} role="alert">
      {icon}
      <Message>{children}</Message>
      {action}
    </StyledAlert>
  );
});

export default Alert;
