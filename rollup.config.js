import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';

import { DEFAULT_EXTENSIONS } from '@babel/core';

import packageJson from './package.json';

const outputs = [
  {
    file: packageJson.main,
    format: 'cjs'
  },
  {
    file: packageJson.module,
    format: 'esm'
  }
];

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx'];

export default outputs.map((output) => {
  return {
    input: './src/index.ts',
    output,
    external: [/@babel\/runtime/],
    plugins: [
      peerDepsExternal(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        presets: ['@emotion/babel-preset-css-prop'],
        plugins: ['@emotion', '@babel/plugin-transform-runtime'],
        extensions
      }),
      commonjs({
        extensions
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      resolve({
        extensions
      }),
      svgr(),
      terser()
    ]
  };
});
