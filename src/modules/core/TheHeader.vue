<template>
    <div class="header">
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand>
                <img class="app-logo" v-bind:src="app_logo" v-if="app_logo" />
                <div v-else>{{ app_title }}</div>
            </b-navbar-brand> 
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-button :to="{name: 'LandingPage'}">Home</b-button>
                    <b-button :to="{name: 'LoginPage'}">Login</b-button>
                    
                </b-navbar-nav>
           </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'the-header',
    data() {
        return {
            app_title: process.env.VUE_APP_TITLE,
            app_logo: require(process.env.VUE_APP_LOGO),
        }
    },
}
</script>

<style scope>
img.app-logo {
    height: 60px;
    margin-top: -12px;
    margin-bottom: -12px;
}
a, button {
    margin-left: 6px;
    margin-right: 6px;
}
.header {
    padding-bottom: 32px;
}
</style>
