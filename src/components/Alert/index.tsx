import React, { memo, PropsWithChildren, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, Severity } from '../../types';
import { StyledAlert, Message } from './Alert.styles';

export interface AlertProps
  extends GenericComponentProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  severity?: Severity;
  icon?: ReactElement;
  action?: ReactElement;
}

function Alert({
  children,
  ref,
  severity = 'normal',
  icon,
  action,
  customStyle,
  ...props
}: PropsWithChildren<AlertProps>) {
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
}

export default memo(Alert);
