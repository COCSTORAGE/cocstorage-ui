import type { Property } from 'csstype';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type ColorProperty = Property.Color;
export type ColorCode = RGB | RGBA | HEX;
export type Color = ColorCode | ColorProperty;

export type AbsoluteUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';
export type RelativeUnit = 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
export type CSSValue = number | `${number}${AbsoluteUnit | RelativeUnit}`;
