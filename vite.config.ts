import * as path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

import pkg from './package.json';

export default defineConfig(({ command }) => {
  const alias = [
    { find: '@', replacement: path.resolve(__dirname, 'src') },
    {
      find: '@assets',
      replacement: path.resolve(__dirname, 'src/assets')
    },
    {
      find: '@components',
      replacement: path.resolve(__dirname, 'src/components')
    },
    {
      find: '@theme',
      replacement: path.resolve(__dirname, 'src/theme')
    },
    {
      find: '@types',
      replacement: path.resolve(__dirname, 'src/types')
    },
    {
      find: '@utils',
      replacement: path.resolve(__dirname, 'src/utils')
    }
  ];

  if (command === 'serve') {
    return {
      plugins: [svgr({ exportAsDefault: true })],
      resolve: {
        alias
      }
    };
  }
  return {
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'cocstorage-ui',
        formats: ['cjs', 'es'],
        fileName: (fileName) => (fileName === 'cjs' ? 'index.js' : 'index.es.js')
      },
      rollupOptions: {
        external: [...Object.keys(pkg.peerDependencies), /@emotion/g],
        output: {
          interop: 'auto'
        }
      }
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react'
      }),
      dts({ insertTypesEntry: true }),
      svgr({ exportAsDefault: true })
    ],
    resolve: {
      alias
    },
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  };
});
