import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerList from './router'

Vue.config.productionTip = true
Vue.use(VueRouter)

const router = new VueRouter(routerList);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
