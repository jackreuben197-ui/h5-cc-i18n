import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { 'h5-cc-i18n.min': 'src/runtime.ts' },
  format: ['iife'],
  target: 'es5',
  outDir: 'dist',
  clean: false,
  splitting: false,
  sourcemap: false,
  minify: true,
  shims: true,
  noExternal: [/.*/],
  globalName: '__i18nRuntimeInstance',
  outExtension: function () {
    return { js: '.js' }
  },
  tsconfig: 'tsconfig.build.json'
})
