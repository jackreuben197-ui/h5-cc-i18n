import { I18n } from './i18n'
import { createFacade } from './facade'
import { localeFiles } from './locales-manifest'

declare var window: any
declare var document: any

function resolveBaseUrl(): string {
  try {
    var script = typeof document !== 'undefined' ? document.currentScript : null
    var src = script && script.src ? String(script.src) : ''
    return src.split(/[?#]/)[0].replace(/[^\/]*$/, '')
  } catch (error) {
    return ''
  }
}

var _instance = new I18n(localeFiles, resolveBaseUrl())

var globalObj: any = typeof window !== 'undefined' ? window : {}
var preloaded: Record<string, Record<string, string>> | undefined = globalObj.__H5_CC_I18N_LOCALES__

if (preloaded) {
  for (var locale in preloaded) {
    _instance.registerLocale(locale, preloaded[locale])
  }
}

var i18n = createFacade(_instance)

export default i18n
