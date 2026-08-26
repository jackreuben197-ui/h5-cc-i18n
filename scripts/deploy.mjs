import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(rootDir, 'dist')

const h5GameDir = path.resolve(rootDir, process.env.H5_GAME_DIR || '../../h5-game')
const ccGameDir = path.resolve(rootDir, process.env.H5_CC_GAME_DIR || '../h5-cc-game')

const BUNDLE = 'h5-cc-i18n.min.js'
const RUNTIME = ['runtime.js', 'runtime.mjs']

const targets = [
  {
    label: 'h5-game/public',
    dir: path.join(h5GameDir, 'public'),
    files: [BUNDLE],
  },
  {
    label: 'h5-game/node_modules',
    dir: path.join(h5GameDir, 'node_modules/@silenthill/h5-cc-i18n/dist'),
    files: [BUNDLE, ...RUNTIME],
  },
  {
    label: 'h5-cc-game/preview-templates',
    dir: path.join(ccGameDir, 'preview-templates'),
    files: [BUNDLE],
  },
  {
    label: 'h5-cc-game/build-templates',
    dir: path.join(ccGameDir, 'build-templates/web-mobile'),
    files: [BUNDLE],
  },
]

if (!fs.existsSync(path.join(distDir, BUNDLE))) {
  console.error(`[deploy] нет ${path.join(distDir, BUNDLE)} — сначала npm run build`)
  process.exit(1)
}

let copied = 0
let skipped = 0

for (const target of targets) {
  if (!fs.existsSync(target.dir)) {
    console.warn(`[deploy] пропуск: ${target.label} — нет каталога ${target.dir}`)
    skipped += 1
    continue
  }
  for (const file of target.files) {
    const from = path.join(distDir, file)
    if (!fs.existsSync(from)) continue
    fs.copyFileSync(from, path.join(target.dir, file))
    copied += 1
  }
  console.log(`[deploy] ${target.label}`)
}

console.log(`[deploy] скопировано файлов: ${copied}${skipped ? `, пропущено целей: ${skipped}` : ''}`)

if (skipped) {
  console.log('[deploy] пути задаются переменными H5_GAME_DIR и H5_CC_GAME_DIR')
}
