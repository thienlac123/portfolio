import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en.json'
import vi from './vi.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, vi: { translation: vi } },
    fallbackLng: 'en',
    supportedLngs: ['en', 'vi'],
    interpolation: { escapeValue: false },
  })

// Giữ thẻ <html lang> đúng ngôn ngữ (tốt cho SEO và accessibility)
const syncLang = (lng: string) => { document.documentElement.lang = lng.slice(0, 2) }
syncLang(i18n.language)
i18n.on('languageChanged', syncLang)

export default i18n