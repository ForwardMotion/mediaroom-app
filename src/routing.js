import VueRouter from 'vue-router';

import Landing from './pages/Landing.vue'
import ArticleView from './pages/ArticleView.vue'

const routes = [
    {path: '/', component: Landing},
    {path: '/view/:id', component: ArticleView},
];

export const router = new VueRouter({
    mode: 'history',
    routes,
});
