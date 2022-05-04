import { Interpolation, Theme as EmotionTheme } from '@emotion/react';

export type ComponentColor = 'text' | 'accent' | 'semiAccent' | 'transparent';
export type Size = 'big' | 'medium' | 'small' | 'pico';
export type Severity = 'normal' | 'info' | 'success' | 'warning' | 'error';

export type CustomStyle = Interpolation<EmotionTheme>;

export type GenericComponentProps<T> = T & {
  customStyle?: CustomStyle;
};
