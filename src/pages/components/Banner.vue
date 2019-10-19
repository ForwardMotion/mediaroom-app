<template>
    <div class="banner">
        <b-alert show v-bind:variant="variant">
            <h4 class="alert-heading">{{ title }}</h4>
            <p>{{ message }}</p>
        </b-alert>
    </div>
</template>

<script>
export default {
    name: 'banner',
    props: ['title', 'message'],
    data() {
        return {
            variant: 'info',
        }
    },
}
</script>

<style scope>
.banner {
    margin-top: 24px;
    margin-bottom: 24px;
}
</style>
