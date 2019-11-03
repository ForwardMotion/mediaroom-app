import Vuex from 'vuex';
import { UPDATE_USER, LOGOUT_USER } from './mutation_types';

const store = new Vuex.Store({
    state: {
        'user_id': null,
    },
    mutations: {
        [UPDATE_USER] (state, user_data) {
            state.user_id = user_data.user_id;
        },
        [LOGOUT_USER] (state) {
            // Make request to server
            if (true) {
                // On success clear out the user information.
                state.user_id = null;
            } else {
            }
        },
    },
});
