import type { RefObject } from 'react';
import type { Interpolation, Theme as EmotionTheme } from '@emotion/react';

export type ComponentColor = 'text' | 'accent' | 'semiAccent' | 'transparent';
export type Size = 'big' | 'medium' | 'small' | 'pico';
export type Severity = 'normal' | 'info' | 'success' | 'warning' | 'error';

export type GenericComponentProps<T, K> = T & {
  componentRef?: RefObject<K>;
  customStyle?: Interpolation<EmotionTheme>;
};
