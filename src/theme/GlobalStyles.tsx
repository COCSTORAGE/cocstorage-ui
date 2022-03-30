import React from 'react';
import { Global, css } from '@emotion/react';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          -webkit-tap-highlight-color: transparent;
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
          cursor: default;
          line-height: 1.5;
          overflow-wrap: break-word;
          word-break: break-word;
          tab-size: 4;
        }

        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          vertical-align: baseline;
        }

        /* HTML5 display-role reset for older browsers */

        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }

        body {
          line-height: 1;
        }

        ol,
        ul {
          list-style: none;
        }

        blockquote,
        q {
          quotes: none;
        }

        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: none;
        }

        img,
        picture,
        video,
        canvas {
          display: block;
          max-width: 100%;
        }

        button {
          background: none;
          border: 0;
          cursor: pointer;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />
  );
}

export default GlobalStyles;
