<template>
    <div id="app">
        <app-header></app-header>
        <b-container>
            <!-- <banner title="Test" message="Testing" /> -->
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>
import AppHeader from './pages/components/AppHeader.vue'
import Banner from './pages/components/Banner.vue'
import Landing from './pages/Landing.vue'

export default {
    name: 'app',
    components: {
        AppHeader,
        Banner,
        Landing,
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
