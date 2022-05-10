import { Theme as EmotionTheme, Interpolation } from '@emotion/react';

export type BrandColor = 'text' | 'accent' | 'semiAccent' | 'transparent';
export type Size = 'big' | 'medium' | 'small' | 'pico';
export type Severity = 'normal' | 'info' | 'success' | 'warning' | 'error';

export type CustomStyle = Interpolation<EmotionTheme>;

export type GenericComponentProps<T> = T & {
  customStyle?: CustomStyle;
};
