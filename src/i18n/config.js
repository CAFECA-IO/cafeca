import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en_us: {
    translations: require("./locales/en/translations.json"),
  },

  jp: {
    translations: require("./locales/jp/translations.json"),
  },
  zh_cn: {
    translations: require("./locales/zh_CN/translations.json"),
  },

  zh_hk: {
    translations: require("./locales/zh_HK/translations.json"),
  },
  zh_tw: {
    translations: require("./locales/zh_TW/translations.json"),
  },
};

const DETECTION_OPTIONS = {
  order: [
    "querystring",
    "cookie",
    // "sessionStorage",
    // "navigator",
    "htmlTag",
    // "path",
    // "subdomain",
  ],
  lookupQuerystring: "lang",
  lookupCookie: "lang",
  htmlTag: document.documentElement,
  // lookupSessionStorage: "lang",
  caches: ["cookie"],
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: DETECTION_OPTIONS,
    resources,
    fallbackLng: "zh_tw",
    ns: ["translations"],
    defaultNS: "translations",
    supportedLngs: ["en_us", "jp", "zh_cn", "zh_hk", "zh_tw"],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
