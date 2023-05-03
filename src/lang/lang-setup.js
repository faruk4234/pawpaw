import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'react-native-localize'

import Storage from '../utils/storage'
import en from './en'
import tr from './tr'

const detectLocale = async (callback) => {
    const storedLocale = await Storage.getItem('userLanguage')
    if (storedLocale) {
        return callback(storedLocale)
    }

    return callback(getLocales()[0].languageTag)
}

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: detectLocale,
    init: () => { },
    cacheUserLanguage: () => { }
}

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(languageDetector).use(initReactI18next).init({
    react: {
        useSuspense: false
    },
    compatibilityJSON: 'v3',
    fallbackLng: tr,
    resources: {
        en: {
            translation: en
        },
        tr: {
            translation: tr
        }
    }
})
export default i18n
