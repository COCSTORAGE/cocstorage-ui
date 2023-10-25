import { Theme } from '@emotion/react';

import { AbsoluteUnit, BrandColor, CSSValue, Color, RelativeUnit } from 'src/typings';

export function getBrandColorCode(theme: Theme, brandColor?: BrandColor | Color): Color | null {
  const {
    palette: { primary }
  } = theme;
  if (brandColor === 'primary') {
    return primary.main;
  }
  return null;
}

export function convertNumberToCSSValue(value: CSSValue, unit?: AbsoluteUnit & RelativeUnit) {
  if (!Number.isNaN(Number(value))) {
    return `${value}${unit || 'px'}`;
  }
  return value;
}

export default function createUniqueKey(value: string) {
  let hashedValue = 0;
  for (let i = 0; i < value.length; i += 1) {
    hashedValue = Math.imul(31, hashedValue) + value.charCodeAt(i) || 0;
  }
  return Math.abs(hashedValue) % 100000;
}
