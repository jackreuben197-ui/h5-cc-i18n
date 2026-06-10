import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { runtime: 'src/runtime.ts' },
  format: ['cjs', 'esm'],
  target: 'es5',
  dts: true,
  clean: false,
  outDir: 'dist',
  splitting: false,
  sourcemap: false,
  minify: false,
  shims: false,
  noExternal: [/.*/],
  tsconfig: 'tsconfig.build.json'
})
