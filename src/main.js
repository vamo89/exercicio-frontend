import Vue from 'vue'
import VueResource from 'vue-resource'
import Icon from 'vue-awesome/components/Icon'

import App from './App.vue'
import '../static/css/reset.css'

// Importing all icons
// TODO: change that to import only the ones in use
import 'vue-awesome/icons'

Vue.component('icon', Icon)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
