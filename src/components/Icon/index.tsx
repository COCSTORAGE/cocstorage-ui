import React, { memo, SVGProps } from 'react';
import { SerializedStyles } from '@emotion/react';
import * as SvgIcons from '@assets/icons';

interface IconPros extends SVGProps<SVGElement> {
  name: keyof typeof SvgIcons;
  customStyle?: SerializedStyles;
}

function Icon({ name, viewBox = '0 0 24 24', customStyle, ...props }: IconPros) {
  const SvgIcon = SvgIcons[name];

  return <SvgIcon viewBox={viewBox} css={customStyle} {...props} />;
}

export default memo(Icon);
