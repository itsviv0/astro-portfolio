// i18n utility functions
export const languages = {
  en: 'English',
  de: 'Deutsch'
};

export const defaultLang = 'en';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to default language
        let fallbackValue = translations[defaultLang];
        for (const k of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && k in fallbackValue) {
            fallbackValue = fallbackValue[k];
          } else {
            return key; // Return the key if no translation found
          }
        }
        return fallbackValue;
      }
    }
    
    return value || key;
  }
}

// Import translation files
import en from './locales/en.json';
import de from './locales/de.json';

const translations = {
  en,
  de
};

export { translations };
