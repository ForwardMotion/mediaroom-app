import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueRouter);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

import { router } from './routing.js'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
