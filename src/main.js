import Vue from 'vue'
import VueResource from 'vue-resource'
import Icon from 'vue-awesome/components/Icon'

import App from './App.vue'
import '../static/css/reset.css'

// Importing icons in use
import 'vue-awesome/icons/map-marker'
import 'vue-awesome/icons/regular/envelope'
import 'vue-awesome/icons/link'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/brands/google-plus-g'
import 'vue-awesome/icons/brands/linkedin-in'
import 'vue-awesome/icons/brands/github-alt'
import 'vue-awesome/icons/brands/yoast'
import 'vue-awesome/icons/paper-plane'
import 'vue-awesome/icons/external-link-alt'
import 'vue-awesome/icons/regular/thumbs-up'

Vue.component('icon', Icon)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
