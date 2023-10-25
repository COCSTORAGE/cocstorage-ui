import { HTMLAttributes, PropsWithChildren, ReactElement, forwardRef } from 'react';

import { GenericComponentProps, Severity } from 'src/typings';

import { StyledBadge } from './Badge.styles';

export interface BadgeProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  severity?: Exclude<Severity, 'normal'>;
  icon?: ReactElement;
  iconOnly?: boolean;
}

const Badge = forwardRef<HTMLDivElement, PropsWithChildren<BadgeProps>>(function Badge(
  { children, severity, icon, iconOnly = false, customStyle, ...props },
  ref
) {
  return (
    <StyledBadge
      ref={ref}
      severity={severity}
      hasIcon={!!icon}
      iconOnly={iconOnly}
      {...props}
      css={customStyle}
    >
      {icon}
      {!iconOnly && children}
    </StyledBadge>
  );
});

export default Badge;
