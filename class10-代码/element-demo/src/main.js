import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router.js'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
