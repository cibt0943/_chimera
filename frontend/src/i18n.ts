import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      required: 'This field is a required',
    },
  },
  ja: {
    translation: {
      required: '必須項目です',
    },
  },
}

const i18n = use(initReactI18next).init({
  resources,
  lng: 'ja',
  fallbackLng: 'ja', // 選択した言語に関する辞書情報がない場合に、かわりに表示する言語
  debug: true,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export { i18n }
