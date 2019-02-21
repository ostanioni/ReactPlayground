import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './msgs'
 
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
  //silentTranslationWarn: process.env.NODE_ENV === 'production'
  //silentTranslationWarn: false
})

export default i18n