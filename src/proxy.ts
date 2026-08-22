declare var window: any
declare var global: any

var globalObj: any = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {}

function getI18n(): any {
  return globalObj.__H5_CC_I18N__ || null
}

var i18n = {
  LANG_ZH_CN: 'zh-CN' as const,
  LANG_ZH_TW: 'zh-TW' as const,
  LANG_EN: 'en' as const,
  LANG_PT: 'pt' as const,
  LANG_DE: 'de' as const,
  LANG_ES: 'es' as const,
  LANG_FR: 'fr' as const,
  LANG_HI: 'hi' as const,
  LANG_IT: 'it' as const,
  LANG_JA: 'ja' as const,
  LANG_KO: 'ko' as const,
  LANG_RU: 'ru' as const,
  LANG_TH: 'th' as const,
  LANG_VI: 'vi' as const,
  get _instance(): any { return getI18n() },
  get currentLocale(): string {
    var inst = this._instance
    return inst && typeof inst.getCurrentLocale === 'function' ? inst.getCurrentLocale() : ''
  },
  getAllLocales: function (): string[] {
    var inst = this._instance
    return inst && typeof inst.getAllLocales === 'function' ? inst.getAllLocales() : []
  },
  setLocale: function (locale: string): void {
    var inst = this._instance
    if (inst && typeof inst.setLocale === 'function') inst.setLocale(locale)
  },
  get: function (key: string, defaultValue?: string): string {
    var inst = this._instance
    if (inst && typeof inst.get === 'function') {
      return inst.get(key, defaultValue)
    }
    return defaultValue !== undefined ? defaultValue : key
  }
}

export default i18n
