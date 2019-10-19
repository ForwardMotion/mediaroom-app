<template>
    <div class="landing">
        <b-row>
            <b-col>
                <article-summary
                    v-bind:title='article.title'
                    v-bind:summary='article.summary'
                    v-bind:image='article.image'
                    v-bind:id='article.id'
                    v-for='article in summaries.slice(0, 1)'
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ArticleSummary from './components/ArticleSummary.vue'

export default {
    name: 'landing',
    components: {
        ArticleSummary,
    },
    props: [],
    data: function() {
        return {
            'summaries': [
                {
                    'id': 'a1',
                    'title': 'Test',
                    'summary': 'Lorem ipsum',
                    'image': 'https://placekitten.com/300/300',
                },
                {
                    'id': 'a2',
                    'title': 'Test',
                    'summary': 'Lorem ipsum'
                },
                {
                    'id': 'a3',
                    'title': 'Test',
                    'summary': 'Lorem ipsum'
                },
            ],
        };
    },
}
</script>

<style scope>
.landing {
}
</style>
