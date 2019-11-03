<template>
    <div id="app">
        <the-header />
        <b-container>
            <!-- <banner title="Test" message="Testing" /> -->
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>
import TheHeader from '@/modules/core/TheHeader'
import TheBanner from '@/modules/core/TheBanner'

export default {
    name: 'app',
    components: {
        TheHeader,
        TheBanner,
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
