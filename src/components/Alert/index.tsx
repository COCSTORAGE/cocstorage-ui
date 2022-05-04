import React, { forwardRef, PropsWithChildren, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, Severity } from '../../types';
import { StyledAlert, Message } from './Alert.styles';

export interface AlertProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  severity?: Severity;
  icon?: ReactElement;
  action?: ReactElement;
}

const Alert = forwardRef<HTMLDivElement, PropsWithChildren<AlertProps>>(function Alert(
  { children, severity = 'normal', icon, action, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  return (
    <StyledAlert
      ref={ref}
      theme={theme}
      severity={severity}
      css={customStyle}
      {...props}
      role="alert"
    >
      {icon}
      <Message>{children}</Message>
      {action}
    </StyledAlert>
  );
});

export default Alert;
