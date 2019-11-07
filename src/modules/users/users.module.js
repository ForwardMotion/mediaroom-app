export const USERS_LOGIN = 'users/LOGIN';
export const USERS_REGISTER = 'users/REGISTER';
export const USERS_LOGOUT = 'users/LOGOUT';
export const USERS_LOAD_STATE = 'users/LOAD_STATE';
export const USERS_SAVE_STATE = 'users/SAVE_STATE';

const users = {
    namespaced: true,
    store: {
        logged_in: false,
        display_name: '',
        roles: [],
    },
    mutations: {
        [USERS_LOAD_STATE] (state, new_state) {
            state = new_state;
        },
    },
    actions: {
        async [USERS_LOGIN] ({state, commit}, credentials) {
            var results = await api.post('login', {
                username: credentials.username,
                password: credentials.password,
            });
            commit(USERS_LOGIN, {
                display_name: results.data.display_name,
                roles: results.data.roles,
            });
        },
        [USERS_SAVE_STATE] ({state, commit}) {
            let store_data = JSON.stringify(state);
            localStorage.setItem('users.module', store_data);
        },
        [USERS_LOAD_STATE] ({state, commit}, new_state) {
            let store_data = new_state ? new_state : JSON.parse(localStorage.getItem('users.module'));
            if (!store_data || typeof store_data == 'object') {
                throw new Error('store_data not of proper format!');
            }

            // Verify state is not malformed or old...
            var errors = [];
            if (typeof store_data.logged_in != 'boolean') {
                errors.push('users.logged_in not boolean!');
            }
            if (typeof store_data.display_name != 'string') {
                errors.push('users.display_name not string!');
            }
            if (typeof store_data.roles != 'object') {
                errors.push('users.roles not object!');
            }
            for (var role of store_data.roles) {
                if (typeof role != 'string') {
                    errors.push('users.roles.'+JSON.stringify(role)+'not string!');
                }
            }
            if (errors.length > 0) {
                throw new Error(errors);
            }

            // Now that error checking is complete.. let's actually fill in the data.
            let user_state = {
                logged_in: store_data.logged_in ? store_data.logged_in : false,
                display_name: store_data.display_name ? store_data.display_name : '',
                roles: store_data.roles ? store_data.roles : [],
            };
            commit(USERS_LOAD_STATE, user_state);
        },
    },
};

export default users;
