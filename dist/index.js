"use strict";
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function __export(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function __copyProps(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function get() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function __toCommonJS(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/proxy.ts
var proxy_exports = {};
__export(proxy_exports, {
    default: function _default() {
        return proxy_default;
    }
});
module.exports = __toCommonJS(proxy_exports);
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
