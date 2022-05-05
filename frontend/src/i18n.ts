import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      dateFormat: 'yyyy/MM/dd HH:mm:ss',
      dateMask: '____/__/__ __:__:__',
      'common.add': 'add',
      'common.edit': 'edit',
      'common.save': 'save',
      'common.saved': 'saved.',
      'common.delete': 'delete',
      'common.cancel': 'cancel',
      'validation.required': 'This field is a required',
      'validation.date': 'Please enter the correct date',
      'task.task': 'task',
      'task.model.title': 'title',
      'task.model.status': 'status',
      'task.model.memo': 'memo',
      'task.model.dueDate': 'dueDate',
    },
  },
  ja: {
    translation: {
      dateTimeFormat: 'yyyy年MM月dd日 HH:mm',
      dateFormat: 'yyyy年MM月dd日',
      timeFormat: 'HH:mm',
      dateTimeMask: '____年__月__日 __:__',
      dateMask: '____年__月__日',
      timeMask: '__:__',
      'common.add': '追加',
      'common.edit': '編集',
      'common.delete': '削除',
      'common.save': '保存',
      'common.saved': '保存しました。',
      'common.cancel': 'キャンセル',
      'validation.required': '必須項目です',
      'validation.date': '正しい日付を入力してください',
      'task.task': 'タスク',
      'task.model.title': 'タイトル',
      'task.model.status': '状態',
      'task.model.memo': 'メモ',
      'task.model.dueDate': '期限',
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
