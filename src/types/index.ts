import { Interpolation, Theme as EmotionTheme } from '@emotion/react';

export type ThemeType = 'light' | 'dark';

export interface COCTheme {
  type: ThemeType;
  palette: {
    primary: {
      main: string;
      sub1: string;
      sub2: string;
      sub3: string;
      bg1: string;
      bg2: string;
      bg3: string;
    };
    secondary: {
      red: {
        main: string;
        sub1: string;
        sub2: string;
        sub3: string;
        bg: string;
      };
      green: {
        main: string;
        sub1: string;
        sub2: string;
        sub3: string;
        bg: string;
      };
      yellow: {
        main: string;
        sub1: string;
        sub2: string;
        sub3: string;
        bg: string;
      };
    };
    text: {
      light: {
        main: string;
        text1: string;
        text2: string;
        text3: string;
      };
      dark: {
        main: string;
        text1: string;
        text2: string;
        text3: string;
      };
    };
    box: {
      filled: {
        normal: string;
        focused: string;
        pressed: string;
        disabled: string;
      };
      stroked: {
        normal: string;
      };
    };
    background: {
      bg: string;
      fg1: string;
      fg2: string;
    };
    gradation: {
      first: string;
      second: string;
      third: string;
    };
    common: {
      white: string;
      black: string;
    };
  };
}

export type GenericComponentProps<T> = T & {
  customStyle?: Interpolation<EmotionTheme>;
};

declare module '@emotion/react' {
  export interface Theme extends COCTheme {}
}
