import { I18n } from './i18n'

var _instance = new I18n()

var i18n = {
  LANG_ZH_CN: 'zh-CN' as const,
  LANG_ZH_TW: 'zh-TW' as const,
  LANG_EN: 'en' as const,
  LANG_PT: 'pt' as const,
  get currentLocale(): string { return _instance.getCurrentLocale() },
  getAllLocales: function (): string[] { return _instance.getAllLocales() },
  setLocale: function (locale: string): void { _instance.setLocale(locale) },
  get: function (key: string, defaultValue?: string): string { return _instance.get(key, defaultValue) },
  getCurrentLocale: function (): string { return _instance.getCurrentLocale() }
}

export default i18n
