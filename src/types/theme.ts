import type {
  TypographyComponent,
  TypographyLineHeight,
  TypographyVariant,
  TypographyWeight
} from './component';
import type { CSSValue, ColorCode } from './css';

export type ThemeMode = 'light' | 'dark';

export interface COCTheme {
  mode: ThemeMode;
  palette: {
    primary: Record<'main' | 'sub1' | 'sub2' | 'sub3' | 'bg1' | 'bg2' | 'bg3', ColorCode>;
    secondary: {
      red: Record<'main' | 'sub1' | 'sub2' | 'sub3' | 'bg', ColorCode>;
      green: Record<'main' | 'sub1' | 'sub2' | 'sub3' | 'bg', ColorCode>;
      yellow: Record<'main' | 'sub1' | 'sub2' | 'sub3' | 'bg', ColorCode>;
    };
    text: {
      light: Record<'main' | 'text1' | 'text2' | 'text3', ColorCode>;
      dark: Record<'main' | 'text1' | 'text2' | 'text3', ColorCode>;
    };
    box: {
      filled: Record<'normal' | 'focused' | 'pressed' | 'disabled', ColorCode>;
      stroked: Record<'normal', ColorCode>;
    };
    background: Record<'bg' | 'fg1' | 'fg2', ColorCode>;
    gradation: Record<'first' | 'second' | 'third', ColorCode>;
    common: Record<'white' | 'black', ColorCode>;
    others: Record<'visited', ColorCode>;
  };
  breakpoints: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
  typography: {
    [key in TypographyVariant]: {
      component: TypographyComponent;
      size: CSSValue;
      weight: TypographyWeight;
      lineHeight: TypographyLineHeight;
      letterSpacing: CSSValue;
    };
  };
}

declare module '@emotion/react' {
  export interface Theme extends COCTheme {}
}
