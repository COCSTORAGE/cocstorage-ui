import { Theme } from '@emotion/react';

export const light: Theme = {
  type: 'light',
  palette: {
    primary: {
      main: '#3C89FF',
      sub1: '#67A4FF',
      sub2: '#1F6BDE',
      sub3: '#B7D4FF',
      bg1: 'rgba(60, 137, 255, 0.15)',
      bg2: 'rgba(60, 137, 255, 0.13)',
      bg3: 'rgba(60, 137, 255, 0.07)'
    },
    secondary: {
      red: {
        main: '#FC4F4F',
        sub1: '#FF8585',
        sub2: '#DE3838',
        sub3: '#FFC6C6',
        bg: 'rgba(252, 79, 79, 0.15)'
      },
      green: {
        main: '#4AD871',
        sub1: '#84D89C',
        sub2: '#28B14E',
        sub3: '#C0DEC9',
        bg: 'rgba(74, 216, 113, 0.15)'
      },
      yellow: {
        main: '#FFBF44',
        sub1: '#FFD687',
        sub2: '#E5AD3F',
        sub3: '#FFE9BD',
        bg: 'rgba(255, 191, 68, 0.15)'
      }
    },
    text: {
      light: {
        main: '#232A3D',
        text1: 'rgba(35, 42, 61, 0.7)',
        text2: 'rgba(35, 42, 61, 0.5)',
        text3: 'rgba(35, 42, 61, 0.3)'
      },
      dark: {
        main: '#EEF3FF',
        text1: 'rgba(238, 243, 255, 0.7)',
        text2: 'rgba(238, 243, 255, 0.5)',
        text3: 'rgba(238, 243, 255, 0.3)'
      }
    },
    box: {
      filled: {
        normal: 'rgba(35, 42, 61, 0.06)',
        focused: 'rgba(35, 42, 61, 0.03)',
        pressed: 'rgba(35, 42, 61, 0.09)',
        disabled: 'rgba(35, 42, 61, 0.03)'
      },
      stroked: {
        normal: 'rgba(35, 42, 61, 0.15)'
      }
    },
    background: {
      bg: '#FFFFFF',
      fg1: '#F1F3F6',
      fg2: '#E4E6EC'
    },
    gradation: {
      first: '#63DAFF',
      second: '#4891FF',
      third: '#717EFF'
    },
    common: {
      white: '#FFFFFF',
      black: '#000000'
    }
  },
  breakpoints: {
    xs: 0,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1440
  },
  typography: {
    h1: {
      component: 'h1',
      size: '24px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: 1.25,
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    h2: {
      component: 'h2',
      size: '22px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: 1.25,
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    h3: {
      component: 'h3',
      size: '18px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: 1.25,
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    h4: {
      component: 'h4',
      size: '16px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: 1.25,
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    p1: {
      component: 'div',
      size: '16px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: 1.25,
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    p2: {
      component: 'div',
      size: '14px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: 1.25,
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    s1: {
      component: 'span',
      size: '12px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: 1.25,
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    s2: {
      component: 'span',
      size: '10px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: 1.25,
        main: 1.75
      },
      letterSpacing: '-0.04em'
    }
  }
};
