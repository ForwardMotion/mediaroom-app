import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex);

import store from '@/modules/core/store'
Vue.prototype.$store = store;

import { router } from '@/modules/core/router'
import App from '@/modules/core/App'
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
