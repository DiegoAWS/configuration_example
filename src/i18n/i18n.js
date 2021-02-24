import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from './translations/es.json'
import en from './translations/en.json'
import fr from './translations/fr.json'


const resources = {
  es,
  en,
  fr
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;