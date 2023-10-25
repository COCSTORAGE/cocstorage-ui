import type { ElementType } from 'react';

import type { Theme as EmotionTheme, Interpolation } from '@emotion/react';

import type { Property } from 'csstype';

import * as SvgIcons from '../assets/icons';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type ColorProperty = Property.Color;
export type ColorCode = RGB | RGBA | HEX;
export type Color = ColorCode | ColorProperty;

export type AbsoluteUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';
export type RelativeUnit = 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
export type CSSValue = number | `${number}${AbsoluteUnit | RelativeUnit}` | 'fit-content' | 'auto';

export type Variant = 'text' | 'accent' | 'semiAccent' | 'transparent';
export type TextBarVariant = 'outline' | 'fill';
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
export type Size = 'xBig' | 'big' | 'medium' | 'small' | 'pico';
export type Severity = 'normal' | 'info' | 'success' | 'warning' | 'error';

export type CustomStyle = Interpolation<EmotionTheme>;

export type IconName = keyof typeof SvgIcons;

export type GenericComponentProps<T> = T & {
  customStyle?: CustomStyle;
};

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
  zIndex: Record<
    'header' | 'bottomNavigation' | 'dialog' | 'bottomSheet' | 'backdrop' | 'tooltip' | 'overlay',
    number
  >;
}

declare module '@emotion/react' {
  export interface Theme extends COCTheme {}
}
