// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'
//引用API文件
import api from './api/api.js'
import util from './assets/scripts/common/util';
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(util);
//将API方法绑定到全局
Vue.prototype.$api = api

Vue.use(Element)
Vue.use(VueRouter)

const router = new VueRouter({
  	routes:routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
