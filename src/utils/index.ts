import { Theme } from '@emotion/react';

import { BrandColor, Color } from '../types';

export function getBrandColorCode(theme: Theme, brandColor?: BrandColor | Color): Color | null {
  const {
    palette: { primary }
  } = theme;
  if (brandColor === 'primary') {
    return primary.main;
  }
  return null;
}
