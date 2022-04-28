import React, { memo, SVGProps } from 'react';
import { useTheme } from '@theme';

import * as SvgIcons from '../../assets/icons';

import { GenericComponentProps, Color } from '../../types';
import { StyledIcon } from './Icon.styles';

export interface IconProps extends GenericComponentProps<SVGProps<SVGElement>> {
  name: keyof typeof SvgIcons;
  color?: Color;
}

function Icon({ name, viewBox = '0 0 24 24', color, customStyle, ...props }: IconProps) {
  const { theme } = useTheme();
  const SvgIcon = SvgIcons[name];
  const StyledSvgIcon = StyledIcon(SvgIcon);

  return (
    <StyledSvgIcon
      theme={theme}
      name={name}
      color={color}
      viewBox={viewBox}
      css={customStyle}
      {...props}
    />
  );
}

export default memo(Icon);
