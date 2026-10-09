import { I18n } from './i18n'

export function createFacade(instance: I18n) {
  return {
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
    get currentLocale(): string { return instance.getCurrentLocale() },
    getAllLocales: function (): string[] { return instance.getAllLocales() },
    setLocale: function (locale: string): void { instance.setLocale(locale) },
    get: function (key: string, defaultValue?: string): string { return instance.get(key, defaultValue) },
    getCurrentLocale: function (): string { return instance.getCurrentLocale() },
    hasLocale: function (locale: string): boolean { return instance.hasLocale(locale) },
    getLocaleUrl: function (locale: string): string { return instance.getLocaleUrl(locale) },
    loadLocale: function (locale: string, callback?: (ok: boolean) => void): void { instance.loadLocale(locale, callback) },
    registerLocale: function (locale: string, map: Record<string, string>): void { instance.registerLocale(locale, map) }
  }
}
