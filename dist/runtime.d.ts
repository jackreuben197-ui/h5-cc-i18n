declare var i18n: {
    LANG_ZH_CN: "zh-CN";
    LANG_ZH_TW: "zh-TW";
    LANG_EN: "en";
    LANG_PT: "pt";
    LANG_DE: "de";
    LANG_ES: "es";
    LANG_FR: "fr";
    LANG_HI: "hi";
    LANG_IT: "it";
    LANG_JA: "ja";
    LANG_KO: "ko";
    LANG_RU: "ru";
    LANG_TH: "th";
    LANG_VI: "vi";
    readonly currentLocale: string;
    getAllLocales: () => string[];
    setLocale: (locale: string) => void;
    get: (key: string, defaultValue?: string) => string;
    getCurrentLocale: () => string;
};

export { i18n as default };
