import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import users_module from '@/modules/users/users.module'
const store = new Vuex.Store({
    modules: {
        users: users_module,
    },
});

export default store;
