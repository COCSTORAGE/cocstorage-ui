import React, { memo, SVGProps } from 'react';
import * as SvgIcons from '../../assets/icons';

import { GenericComponentProps } from '../../types';

export interface IconProps extends GenericComponentProps<SVGProps<SVGElement>> {
  name: keyof typeof SvgIcons;
}

function Icon({ name, viewBox = '0 0 24 24', customStyle, ...props }: IconProps) {
  const SvgIcon = SvgIcons[name];

  return <SvgIcon viewBox={viewBox} css={customStyle} {...props} />;
}

export default memo(Icon);
