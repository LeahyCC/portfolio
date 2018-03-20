// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// https://github.com/Justineo/vue-awesome
// https://fontawesome.com/v4.7.0/icons/
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/folder'
import 'vue-awesome/icons/folder-open'

Vue.config.productionTip = false

Vue.component('icon', Icon)

require('./assets/scss/main.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
