import VueRouter from 'vue-router';

import Landing from '@/modules/blog/landing.page'
import ArticleView from '@/modules/blog/article.page'

const routes = [
    {path: '/', component: Landing},
    {path: '/view/:id', component: ArticleView},
];

export const router = new VueRouter({
    mode: 'history',
    routes,
});
