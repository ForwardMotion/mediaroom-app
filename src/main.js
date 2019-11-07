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
import users_module from '@/modules/users/users.module'
const store = new Vuex.Store({
    modules: {
        users: users_module,
    },
});

import { router } from '@/modules/core/router'
import App from '@/modules/core/App.vue'
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
