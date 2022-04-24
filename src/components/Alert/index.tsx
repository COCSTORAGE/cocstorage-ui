import React, { memo, PropsWithChildren, ReactElement, HTMLAttributes } from 'react';
import useTheme from '@theme/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledAlert, Message } from './Alert.styles';

export interface AlertProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  severity?: 'info' | 'success' | 'warning' | 'error';
  icon?: ReactElement;
  action?: ReactElement;
}

function Alert({
  children,
  severity = 'info',
  icon,
  action,
  customStyle,
  ...props
}: PropsWithChildren<AlertProps>) {
  const { theme } = useTheme();

  return (
    <StyledAlert theme={theme} severity={severity} css={customStyle} {...props} role="alert">
      {icon}
      <Message>{children}</Message>
      {action}
    </StyledAlert>
  );
}

export default memo(Alert);