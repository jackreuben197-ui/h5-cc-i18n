import { localesData } from './locales-data'

type LocaleMap = Record<string, string>

export class I18n {
  private data: Record<string, LocaleMap>
  private currentLocale: string

  constructor() {
    this.data = localesData
    this.currentLocale = 'zh-CN'
  }

  getAllLocales(): string[] {
    return Object.keys(this.data)
  }

  setLocale(locale: string): void {
    if (locale in this.data) {
      this.currentLocale = locale
    }
  }

  getCurrentLocale(): string {
    return this.currentLocale
  }

  get(key: string, defaultValue?: string): string {
    var map = this.data[this.currentLocale]
    if (!map) return defaultValue !== undefined ? defaultValue : key
    var val = map[key]
    if (val !== undefined && val !== '') return val
    return defaultValue !== undefined ? defaultValue : key
  }
}
