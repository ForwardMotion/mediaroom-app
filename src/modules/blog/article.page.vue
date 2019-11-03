<template>
    <div class="article-view">
        <b-card v-bind:img-src='image' img-top>
            <h4>{{ title }}</h4>
            <p class='article-text'>{{ article_text }}</p>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'article-view',
}
</script>

<style scope>
.article-view {
    margin-top: 12px;
    margin-bottom: 12px;
    background-color: #F7F7F9;
    text-align: left;
}
</style>
