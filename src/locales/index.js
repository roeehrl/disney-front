import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store/index'

import en from './en/index'
import ar from './ar/index.js'


Vue.use(VueI18n)

const messages = {
  en: en,
  ar: ar,
}

export default new VueI18n({
  locale: store.getters.lng,
  messages,
})
