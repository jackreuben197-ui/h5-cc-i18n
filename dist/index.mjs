// src/proxy.ts
var globalObj = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
function getI18n() {
    return globalObj.__H5_CC_I18N__ || null;
}
var i18n = {
    LANG_ZH_CN: "zh-CN",
    LANG_ZH_TW: "zh-TW",
    LANG_EN: "en",
    LANG_PT: "pt",
    LANG_DE: "de",
    LANG_ES: "es",
    LANG_FR: "fr",
    LANG_HI: "hi",
    LANG_IT: "it",
    LANG_JA: "ja",
    LANG_KO: "ko",
    LANG_RU: "ru",
    LANG_TH: "th",
    LANG_VI: "vi",
    get _instance () {
        return getI18n();
    },
    get currentLocale () {
        var inst = this._instance;
        return inst && typeof inst.getCurrentLocale === "function" ? inst.getCurrentLocale() : "";
    },
    getAllLocales: function getAllLocales() {
        var inst = this._instance;
        return inst && typeof inst.getAllLocales === "function" ? inst.getAllLocales() : [];
    },
    setLocale: function setLocale(locale) {
        var inst = this._instance;
        if (inst && typeof inst.setLocale === "function") inst.setLocale(locale);
    },
    get: function get(key, defaultValue) {
        var inst = this._instance;
        if (inst && typeof inst.get === "function") {
            return inst.get(key, defaultValue);
        }
        return defaultValue !== void 0 ? defaultValue : key;
    }
};
var proxy_default = i18n;
export { proxy_default as default };
