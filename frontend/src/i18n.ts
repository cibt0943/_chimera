import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'common.add': 'add',
      'common.edit': 'edit',
      'common.save': 'save',
      'common.delete': 'delete',
      'common.cancel': 'cancel',
      'validation.required': 'This field is a required',
      'task.task': 'task',
      'task.model.title': 'title',
      'task.model.status': 'status',
    },
  },
  ja: {
    translation: {
      'common.add': '追加',
      'common.edit': '編集',
      'common.delete': '削除',
      'common.save': '保存',
      'common.cancel': 'キャンセル',
      'validation.required': '必須項目です',
      'task.task': 'タスク',
      'task.model.title': 'タイトル',
      'task.model.status': '状態',
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
