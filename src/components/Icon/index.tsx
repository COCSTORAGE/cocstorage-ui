import React, { HTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import * as SvgIcons from '../../assets/icons';

interface IconPros extends HTMLAttributes<HTMLOrSVGElement> {
  name: keyof typeof SvgIcons;
  customStyle?: SerializedStyles;
}

function Icon({ name, customStyle }: IconPros) {
  const SvgIcon = SvgIcons[name];

  return <SvgIcon css={customStyle} />;
}

export default Icon;
