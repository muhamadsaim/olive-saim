// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const languages=['en','arb']

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
      debug: true, // Enable debug output
    whitelist:languages,

    interpolation: {
      escapeValue: false, // React already escapes variables
    },
  });

export default i18n;
