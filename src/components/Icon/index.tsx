import React, { SVGProps } from 'react';
import { SerializedStyles } from '@emotion/react';
import * as SvgIcons from '../../assets/icons';

interface IconPros extends SVGProps<SVGElement> {
  name: keyof typeof SvgIcons;
  customStyle?: SerializedStyles;
}

function Icon({ name, customStyle, ...props }: IconPros) {
  const SvgIcon = SvgIcons[name];

  return <SvgIcon css={customStyle} {...props} />;
}

export default Icon;
