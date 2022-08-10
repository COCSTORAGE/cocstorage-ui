import { Theme } from '@emotion/react';

import { AbsoluteUnit, BrandColor, CSSValue, Color, RelativeUnit } from '../types';

export function getBrandColorCode(theme: Theme, brandColor?: BrandColor | Color): Color | null {
  const {
    palette: { primary }
  } = theme;
  if (brandColor === 'primary') {
    return primary.main;
  }
  return null;
}

export function parseNumberToCSSValue(value: CSSValue, unit?: AbsoluteUnit & RelativeUnit) {
  if (typeof value === 'number') {
    return `${value}${unit || 'px'}`;
  }
  return value;
}
