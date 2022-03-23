export type ThemeType = 'light' | 'dark';

export interface COCTheme {
  palette: {
    primary: {
      main: string;
      sub1: string;
      sub2: string;
      sub3: string;
      bg: string;
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
      text1: string;
      text2: string;
      text3: string;
      text4: string;
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
  };
}

declare module '@emotion/react' {
  export interface Theme extends COCTheme {}
}
