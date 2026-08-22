import { I18n } from './i18n'

var _instance = new I18n()

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
  get currentLocale(): string { return _instance.getCurrentLocale() },
  getAllLocales: function (): string[] { return _instance.getAllLocales() },
  setLocale: function (locale: string): void { _instance.setLocale(locale) },
  get: function (key: string, defaultValue?: string): string { return _instance.get(key, defaultValue) },
  getCurrentLocale: function (): string { return _instance.getCurrentLocale() }
}

export default i18n
