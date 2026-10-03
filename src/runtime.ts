import { I18n } from './i18n'
import { createFacade } from './facade'
import { localesData } from './locales-data'

var _instance = new I18n()

for (var locale in localesData) {
  _instance.registerLocale(locale, localesData[locale])
}

var i18n = createFacade(_instance)

export default i18n
