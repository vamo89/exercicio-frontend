import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'
import '../static/css/reset.css'

Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
