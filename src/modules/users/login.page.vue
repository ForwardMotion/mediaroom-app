<template>
    <div>
        <b-row>
            <b-col>
            </b-col>
            <b-col cols=6>
                <b-form @submit="on_submit">
                    <b-form-group
                        label="Username"
                        label-for="username"
                        description="The account name."
                    >
                        <b-form-input
                            v-model="username"
                            required
                            placeholder="example@example.com" />
                    </b-form-group>
                    <b-form-group
                        label="Password"
                        label-for="password"
                        description="The password for your account."
                    >
                        <b-form-input
                            v-model="password"
                            type="password"
                            required />
                    </b-form-group>
                    <b-row>
                        <b-col cols=6>
                            <b-button type="submit" variant="primary" block>Login</b-button>
                        </b-col>
                        <b-col cols=6>
                            <b-button type="button" variant="outline-primary" block>Forgot Password</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { USERS_LOGIN } from './users.module'
import { mapActions } from 'vuex'
export default {
    name: 'login-page',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        ...mapActions({
            'USERS_LOGIN': 'users/' + USERS_LOGIN,
        }),
        async on_submit(evt) {
            evt.preventDefault();
            var success = await this.USERS_LOGIN({
                username: this.username,
                password: this.password
            });
            if (success) {
                // Redirect to home
                console.log('logged in');
            } else {
                // Show error message
                console.error('logged failed');
            }
        }
    }
}
</script>

<style scope>
</style>
