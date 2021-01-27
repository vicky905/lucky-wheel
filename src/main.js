import Vue from 'vue'
import App from './App.vue'
import Welcome from './pages/Welcome.vue'

import Router from 'vue-router'
const routes = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
  },
];
Vue.config.productionTip = false

const router = new Router({
  routes,
  mode: 'history'

})

Vue.use(Router);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

