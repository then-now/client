import Vue from 'vue'
import App from './App.vue'

// vuex
import store from './store'

// vue-full-page
import VueFullPage from 'vue-fullpage.js'


import LogoImage from "@/components/logo/LogoImage.vue"
import LogoText from "@/components/logo/LogoText.vue"

Vue.config.productionTip = false
Vue.use(VueFullPage)

Vue.component('logo-image', LogoImage)
Vue.component('logo-text', LogoText)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
