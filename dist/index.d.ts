declare var i18n: {
    LANG_ZH_CN: "zh-CN";
    LANG_ZH_TW: "zh-TW";
    LANG_EN: "en";
    LANG_PT: "pt";
    readonly _instance: any;
    readonly currentLocale: string;
    getAllLocales: () => string[];
    setLocale: (locale: string) => void;
    get: (key: string, defaultValue?: string) => string;
};

export { i18n as default };
