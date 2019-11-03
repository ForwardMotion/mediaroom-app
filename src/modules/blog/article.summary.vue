<template>
    <div class="article-summary">
        <b-card v-bind:img-src='image' img-right>
            <h4>{{ title }}</h4>
            <p class='summary-text'>{{ summary }}</p>
            <b-button :href="article_path" class='read-button' block squared variant='outline-info'>Read</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'article-summary',
    props: [
        'title',
        'summary',
        'image',
        'id',
    ],
    computed: {
        article_path() { return '/id/' + this.id; }
    },
}
</script>

<style scope>
.article-summary {
    margin-top: 12px;
    margin-bottom: 12px;
    background-color: #F7F7F9;
    text-align: left;
}
/*.summary-text {
    min-height: 100px;
}*/
.read-button {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
