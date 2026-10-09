type LocaleMap = Record<string, string>
type LoadCallback = (ok: boolean) => void

declare var document: any

var RETRY_DELAY_MS = 5000

export class I18n {
  private data: Record<string, LocaleMap>
  private files: Record<string, string>
  private baseUrl: string
  private currentLocale: string
  private wantedLocale: string
  private waiting: Record<string, LoadCallback[]>
  private failedAt: Record<string, number>

  constructor(files?: Record<string, string>, baseUrl?: string) {
    this.data = {}
    this.files = files || {}
    this.baseUrl = baseUrl || ''
    this.currentLocale = 'zh-CN'
    this.wantedLocale = ''
    this.waiting = {}
    this.failedAt = {}
  }

  getAllLocales(): string[] {
    var names = Object.keys(this.files)
    for (var locale in this.data) {
      if (names.indexOf(locale) === -1) names.push(locale)
    }
    return names
  }

  hasLocale(locale: string): boolean {
    return locale in this.data
  }

  getLocaleUrl(locale: string): string {
    var file = this.files[locale]
    return file ? this.baseUrl + file : ''
  }

  registerLocale(locale: string, map: LocaleMap): void {
    this.data[locale] = map
    this.flush(locale, true)
  }

  loadLocale(locale: string, callback?: LoadCallback): void {
    var self = this
    if (locale in this.data) {
      if (callback) callback(true)
      return
    }
    var url = this.getLocaleUrl(locale)
    if (!url || typeof document === 'undefined') {
      if (callback) callback(false)
      return
    }
    var queue = this.waiting[locale]
    if (queue) {
      if (callback) queue.push(callback)
      return
    }
    this.waiting[locale] = callback ? [callback] : []
    var script = document.createElement('script')
    script.src = url
    script.async = true
    script.onload = function () {
      self.flush(locale, locale in self.data)
    }
    script.onerror = function () {
      self.flush(locale, false)
    }
    ;(document.head || document.documentElement).appendChild(script)
  }

  setLocale(locale: string): void {
    var self = this
    if (locale in this.data) {
      this.wantedLocale = ''
      this.currentLocale = locale
      return
    }
    if (!(locale in this.files) || this.wantedLocale === locale) return
    var failedAt = this.failedAt[locale]
    if (failedAt && Date.now() - failedAt < RETRY_DELAY_MS) return
    this.wantedLocale = locale
    this.loadLocale(locale, function (ok) {
      if (self.wantedLocale !== locale) return
      self.wantedLocale = ''
      if (ok) self.currentLocale = locale
    })
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

  private flush(locale: string, ok: boolean): void {
    if (ok) {
      delete this.failedAt[locale]
    } else {
      this.failedAt[locale] = Date.now()
    }
    var queue = this.waiting[locale]
    if (!queue) return
    delete this.waiting[locale]
    for (var i = 0; i < queue.length; i++) {
      queue[i](ok)
    }
  }
}
