import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import VueClipboard from 'vue-clipboard2'
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueClipboard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
