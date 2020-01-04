import axios from 'axios'
import i18n from '../i18n'

export const Translation = {
  get defaultLanguage () {
    return process.env.VUE_APP_I18N_FALLBACK_LOCALE
  },

  get currentLanguage () {
    return i18n.locale
  },

  set currentLanguage (lang) {
    i18n.locale = lang
  },

  loadLanguageFile (lang) {
    return import(`../lang/${lang}.json`)
  },

  setI18nLanguageInServices (lang) {
    Translation.currentLanguage = lang
    axios.defaults.headers.common['Accept-Language'] = lang
    document.querySelector('html').setAttribute('lang', lang)
    return lang
  },

  changeLanguage (lang) {
    if (i18n.locale === lang) return Promise.resolve(lang) // has been loaded prior
    return Translation.loadLanguageFile(lang).then(msgs => {
      i18n.setLocaleMessage(lang, msgs.default || msgs)
      return Translation.setI18nLanguageInServices(lang)
    })
  }
}
