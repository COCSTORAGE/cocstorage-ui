import type { ColorCode } from './css';

export type ThemeType = 'light' | 'dark';

export interface COCTheme {
  type: ThemeType;
  palette: {
    primary: {
      main: ColorCode;
      sub1: ColorCode;
      sub2: ColorCode;
      sub3: ColorCode;
      bg1: ColorCode;
      bg2: ColorCode;
      bg3: ColorCode;
    };
    secondary: {
      red: {
        main: ColorCode;
        sub1: ColorCode;
        sub2: ColorCode;
        sub3: ColorCode;
        bg: ColorCode;
      };
      green: {
        main: ColorCode;
        sub1: ColorCode;
        sub2: ColorCode;
        sub3: ColorCode;
        bg: ColorCode;
      };
      yellow: {
        main: ColorCode;
        sub1: ColorCode;
        sub2: ColorCode;
        sub3: ColorCode;
        bg: ColorCode;
      };
    };
    text: {
      light: {
        main: ColorCode;
        text1: ColorCode;
        text2: ColorCode;
        text3: ColorCode;
      };
      dark: {
        main: ColorCode;
        text1: ColorCode;
        text2: ColorCode;
        text3: ColorCode;
      };
    };
    box: {
      filled: {
        normal: ColorCode;
        focused: ColorCode;
        pressed: ColorCode;
        disabled: ColorCode;
      };
      stroked: {
        normal: ColorCode;
      };
    };
    background: {
      bg: ColorCode;
      fg1: ColorCode;
      fg2: ColorCode;
    };
    gradation: {
      first: ColorCode;
      second: ColorCode;
      third: ColorCode;
    };
    common: {
      white: ColorCode;
      black: ColorCode;
    };
  };
}

declare module '@emotion/react' {
  export interface Theme extends COCTheme {}
}
