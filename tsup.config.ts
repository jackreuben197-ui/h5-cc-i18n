import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { index: 'src/proxy.ts' },
  format: ['cjs', 'esm'],
  target: 'es5',
  dts: true,
  clean: true,
  outDir: 'dist',
  splitting: false,
  sourcemap: false,
  minify: false,
  shims: false,
  tsconfig: 'tsconfig.build.json'
})
