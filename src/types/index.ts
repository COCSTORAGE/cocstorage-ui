export type ThemeType = 'light' | 'dark';

export interface COCTheme {
  palette: {
    primary: string;
    secondary: string;
    neutral: string;
    mouseover: string;
    click: string;
    disabled: string;
    redEmphasize: string;
  };
}

declare module '@emotion/react' {
  export interface Theme extends COCTheme {}
}
