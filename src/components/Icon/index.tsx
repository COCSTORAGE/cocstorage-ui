import React, { memo, SVGProps } from 'react';
import { useTheme } from '@theme';

import * as SvgIcons from '../../assets/icons';

import { GenericComponentProps, Color } from '../../types';
import { StyledIcon } from './Icon.styles';

export interface IconProps extends GenericComponentProps<SVGProps<SVGElement>, SVGElement> {
  name: keyof typeof SvgIcons;
  color?: Color;
}

function Icon({ name, viewBox = '0 0 24 24', color, customStyle, ...props }: IconProps) {
  const { theme } = useTheme();
  const SvgIcon = SvgIcons[name];
  const StyledSvgIcon = StyledIcon(SvgIcon);

  const splitNames = name.split('_');
  const hasSpecifyViewBox = splitNames.length === 3;
  const newViewBox = `0 0 ${splitNames[1]} ${splitNames[2]}`;

  return (
    <StyledSvgIcon
      theme={theme}
      name={name}
      color={color}
      viewBox={hasSpecifyViewBox ? newViewBox : viewBox}
      css={customStyle}
      {...props}
    />
  );
}

export default memo(Icon);
