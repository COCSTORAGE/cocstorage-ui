import type { ElementType } from 'react';

import type { Theme as EmotionTheme, Interpolation } from '@emotion/react';

import type { CSSValue } from './css';

export type Variant = 'text' | 'accent' | 'semiAccent' | 'transparent';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p1' | 'p2' | 's1' | 's2';
export type TypographyComponent = Extract<
  ElementType,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span' | 'article'
>;
export type TypographyWeight = {
  bold: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  medium: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  regular: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};
export type TypographyLineHeight = {
  default: CSSValue;
  main: CSSValue;
};
export type BrandColor = 'primary';
export type Size = 'big' | 'medium' | 'small' | 'pico';
export type Severity = 'normal' | 'info' | 'success' | 'warning' | 'error';

export type CustomStyle = Interpolation<EmotionTheme>;

export type GenericComponentProps<T> = T & {
  customStyle?: CustomStyle;
};
